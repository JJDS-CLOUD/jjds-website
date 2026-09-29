"""Build the public website download. Requires reportlab and Pillow."""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.lib.utils import ImageReader
from PIL import Image
import io

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'JJDS-Capability-Statement.pdf'
W, H = 595.276, 841.89
NAVY, BLUE, INK, MUTED = map(HexColor, ['#081426','#005BFF','#122238','#506175'])
c = canvas.Canvas(str(OUT), pagesize=(W,H), pageCompression=1)
c.setTitle('JJDS Industries | Capability Statement')
c.setAuthor('JJDS Industries Pty Ltd')
c.setSubject('Industrial installation, mechanical construction, structural steel and process pipework')

def text(value, x, top, width, size=10, color=INK, bold=False, leading=None):
    p = Paragraph(value, ParagraphStyle('body', fontName='Helvetica-Bold' if bold else 'Helvetica', fontSize=size, leading=leading or size*1.42, textColor=color))
    _, height = p.wrap(width,H)
    p.drawOn(c,x,H-top-height)
    return height

def box(x,top,w,h,color):
    c.setFillColor(color); c.rect(x,H-top-h,w,h,stroke=0,fill=1)

def photo(name,x,top,w,h):
    image = Image.open(ROOT/'public'/name)
    # Orient original camera images correctly when placing them in the PDF.
    from PIL import ImageOps
    image = ImageOps.exif_transpose(image).convert('RGB')
    image.thumbnail((1800,1800))
    data=io.BytesIO(); image.save(data,format='JPEG',quality=88); data.seek(0)
    iw,ih=image.size; scale=max(w/iw,h/ih)
    c.saveState()
    path=c.beginPath(); path.rect(x,H-top-h,w,h); c.clipPath(path,stroke=0)
    c.drawImage(ImageReader(data),x+(w-iw*scale)/2,H-top-h+(h-ih*scale)/2,width=iw*scale,height=ih*scale)
    c.restoreState()

def slash(x,top,w,h,color):
    c.setFillColor(color)
    p=c.beginPath(); p.moveTo(x,H-top); p.lineTo(x+w,H-top)
    p.lineTo(x+w-24,H-top-h); p.lineTo(x-24,H-top-h); p.close()
    c.drawPath(p,stroke=0,fill=1)

def veil(x,top,w,h,alpha=.7):
    c.saveState(); c.setFillColor(NAVY); c.setFillAlpha(alpha)
    c.rect(x,H-top-h,w,h,stroke=0,fill=1); c.restoreState()

def steel(top):
    # Vector silver strip with a machined-metal highlight.
    for i in range(14):
        v = int(95 + 135*(1-abs(i-5)/9))
        v=max(80,min(230,v))
        box(0,top+i,W,1,HexColor(f'#{v:02x}{v:02x}{v:02x}'))
    for x in (16,W-16):
        c.setFillColor(HexColor('#455267')); c.circle(x,H-top-7,3,stroke=0,fill=1)
        c.setStrokeColor(HexColor('#D6DEE8')); c.setLineWidth(.5)
        c.line(x-1.5,H-top-7,x+1.5,H-top-7)

def grid(top,height):
    c.saveState(); c.setStrokeColor(HexColor('#18314D')); c.setLineWidth(.3)
    for x in range(0,600,24): c.line(x,H-top,x,H-top-height)
    for y in range(int(top),int(top+height),24): c.line(0,H-y,W,H-y)
    c.restoreState()

def footer(page):
    box(38,786,W-76,1,HexColor('#DAE1EB'))
    text('JJDS Industries Pty Ltd | ABN 39 700 250 157 | ACN 700 250 157',38,797,460,8,MUTED)
    text(f'SEPTEMBER 2026  /  {page:02}',38,813,460,7,MUTED)
    text('jjdsindustries.com.au',420,813,140,7,BLUE)
    c.linkURL('https://www.jjdsindustries.com.au',(420,17,558,30),relative=0)

# A strong photographic cover, using the site's own logo and project image.
box(0,0,W,H,HexColor('#050505'))
photo('jjds-logo.png',82,8,431,287)
text('CAPABILITY STATEMENT  /  2026',38,302,510,10,HexColor('#A9CCFF'),True)
photo('IMG_0961.jpeg',0,330,360,321)
photo('IMG_0966.jpeg',367,330,229,321)
# Dark veil preserves the actual project photograph and keeps cover type legible.
veil(0,330,W,321,.68)
box(38,358,5,221,BLUE)
text('WE INSTALL<br/>WHAT KEEPS<br/>INDUSTRY<br/><font color="#4495FF">MOVING.</font>',58,348,510,47,white,True,49)
text('REAL SITES. PRACTICAL LEADERSHIP. ACCOUNTABLE DELIVERY.',58,601,485,9,white,True)
steel(646)
slash(24,660,425,10,BLUE); slash(457,660,72,10,HexColor('#ABB7C8')); slash(542,660,78,10,BLUE)
text("Australia's Industrial Installation Specialists",38,684,520,18,white,True)
text('MECHANICAL INSTALLATION  /  STRUCTURAL STEEL<br/>PROCESS PIPEWORK  /  SHUTDOWNS & MAINTENANCE',38,723,520,10,HexColor('#B4C4D8'),True,18)
box(38,773,519,1,HexColor('#394659'))
text('AUSTRALIA-WIDE MOBILISATION',38,794,350,10,white,True)
text('jjdsindustries.com.au',393,795,166,9,HexColor('#8FBEFF'))
c.linkURL('https://www.jjdsindustries.com.au',(393,25,557,49),relative=0)
c.showPage()

box(0,0,W,H,NAVY)
grid(0,H)
photo('IMG_0966.jpeg',300,0,296,245)
veil(300,0,296,245,.35)
box(0,0,300,245,HexColor('#05080E'))
im = Image.open(ROOT/'public'/'jjds-logo.png').convert('RGB')
im.thumbnail((720,480))
buf=io.BytesIO(); im.save(buf,format='JPEG',quality=90); buf.seek(0)
text('JJDS INDUSTRIES',38,31,315,11,white,True)
text('BUILT FOR<br/>THE WORK.',38,67,310,38,white,True,40)
text('STEEL. MECHANICAL.<br/>PROCESS.',38,167,245,15,HexColor('#9DC4FF'),True,19)
text('01 / INTEGRATED CAPABILITY',38,218,250,8,white,True)
slash(24,239,425,6,BLUE); slash(460,239,150,6,HexColor('#ABB7C8'))
text('Your scope. Our site know-how.',38,265,520,22,white,True)
text('JJDS Industries delivers mechanical installation, structural steel, process pipework, shutdowns and industrial installation packages for EPC contractors, principal contractors and asset owners across Australia.',38,303,517,11,HexColor('#D2DCEA'))
text('SIX CAPABILITIES. ONE DELIVERY PARTNER.',38,376,510,9,HexColor('#83B7FF'),True)
cards=[
('Industrial plant installation','Installation packages for process equipment, skids, conveyors, pumps, tanks, vessels and production systems.'),
('Mechanical construction','Equipment placement, alignment and assembly; commissioning support, upgrades and brownfield modifications.'),
('Process pipework','Stainless steel, carbon steel and HDPE systems, with pipe supports, testing and handover support.'),
('Structural steel','Platforms, access steel, support frames, pipe racks, stairs, handrails and structural modifications.'),
('Shutdowns & maintenance','Planned shutdowns, breakdown response, replacement works, plant improvements and critical-path support.'),
('HSEQ & quality delivery','Project-specific SWMS, ITPs, permits, inspections, progress records, variations and completion documentation.')]
for i,(title,body) in enumerate(cards):
    x=38+(i%2)*268; y=403+(i//2)*110
    box(x,y,249,98,HexColor('#14273E'))
    box(x,y,249,1,HexColor('#73839B'))
    box(x,y,3,98,BLUE)
    text(f'{i+1:02}',x+15,y+9,30,12,HexColor('#71AFFF'),True)
    text(title,x+47,y+11,193,10.5,white,True)
    text(body,x+15,y+35,219,9.5,HexColor('#D2DCEA'))
text('AUSTRALIA-WIDE. SITE-READY. JJDS.',38,745,518,14,white,True)
MUTED=HexColor('#AEBBD0')
footer(2); c.showPage()

def detail_page(title, label, intro, sections, page):
    offset = 24 if page == 5 else 0
    box(0,0,W,H,NAVY)
    grid(0,H)
    box(0,0,W,145,HexColor('#05080E'))
    if page == 5:
        box(38,222,519,29,BLUE)
        text("Where the crane's reach ends, the sky opens a way.",49,228,497,13,white,True,16)
    text('JJDS INDUSTRIES / '+label,38,24,520,9,HexColor('#9DC4FF'),True)
    text(title,38,52,520,29,white,True,32)
    slash(24,139,425,6,BLUE); slash(460,139,150,6,HexColor('#ABB7C8'))
    text(intro,38,164,519,10.5,HexColor('#D2DCEA'),False,15)
    for i,(heading,body,items) in enumerate(sections):
        x=38+(i%2)*268; top=238+offset+(i//2)*174
        box(x,top,249,159,HexColor('#14273E'))
        box(x,top,249,2,BLUE)
        text(heading,x+14,top+12,221,12,white,True,15)
        text(body,x+14,top+48,221,9.5,HexColor('#D2DCEA'),False,13)
        text('<br/>'.join('- '+v for v in items),x+14,top+99,221,9,HexColor('#B6D6FF'),False,13)
    footer(page); c.showPage()

detail_page('THE INSTALLATION SCOPE.', '02 / TECHNICAL CAPABILITY',
    'Mechanical equipment, process systems and steelwork brought together as practical site installation packages for new facilities, plant upgrades and operating assets.', [
    ('Mechanical & rotating equipment', 'Placement, assembly, alignment and mechanical completion for process equipment and packaged systems.', ['Pumps, motors and drives','Skids, tanks and vessels','Commissioning assistance']),
    ('Conveyors & material handling', 'Mechanical and structural installation for conveyor systems, transfer interfaces and plant upgrades.', ['Frames, rollers, belts and drives','Guarding, platforms and supports','Adjustment and alignment support']),
    ('Process pipework & tie-ins', 'Stainless steel, carbon steel and HDPE systems with site fabrication and installation support.', ['Piping, fittings and supports','Plant modifications and tie-ins','Testing and inspection support']),
    ('Pump stations & water assets', 'Installation and upgrade packages combining mechanical equipment, pipe systems and access structures.', ['Pump, motor and base installation','Suction and discharge pipework','Valves, frames and access steel']),
    ('Structural & access steel', 'Site measure, fabrication and installation support for industrial structures and equipment interfaces.', ['Frames, platforms and pipe racks','Stairs, handrails and brackets','Structural modifications']),
    ('Field welding & rectification', 'Boilermaker-led site welding, fabrication repairs and structural or mechanical modifications.', ['On-site fabrication and repairs','Custom supports and steelwork','Breakdown and shutdown support']),
],3)

detail_page('BUILT AROUND YOUR SITE.', '03 / SECTORS & WORK ENVIRONMENTS',
    'JJDS supports EPC and principal contractors, consulting engineers, councils and asset owners with coordinated installation, practical supervision and clear project communication.', [
    ('Waste & resource recovery', 'Installation support for organics, recycling and waste facilities, including process and biofilter systems.', ['Depackers and process equipment','Ducting, pipework and steelwork','Fabrication and plant modifications']),
    ('Water & wastewater', 'Mechanical and installation support for water treatment, pump stations and industrial water systems.', ['Pumps, skids and process pipework','Supports and access structures','Testing and handover assistance']),
    ('Shutdowns & maintenance', 'Coordinated supervision and trades for planned outages, plant repairs and time-critical installation.', ['Work-front planning and sequencing','Replacement and overhaul support','Daily progress and completion records']),
    ('Brownfield plant upgrades', 'Staged works around access restrictions, operational interfaces, live services and shutdown windows.', ['Equipment replacement and tie-ins','Steel and access modifications','Variation and as-built records']),
    ('Civil & bridge infrastructure', 'Site support for bridge component works, structural repairs, culvert relining and drainage upgrades.', ['Site welding and steel replacement','Regional infrastructure support','Delivery and compliance records']),
    ('Remote & regional delivery', 'Mobile crews for difficult-access projects requiring mechanical, steel, pipework and civil support.', ['Mobilisation and site coordination','Shutdown and upgrade packages','RFQ-to-handover communication']),
],4)

detail_page('BEYOND THE CRANE.<br/>WORKING ALONGSIDE.', '04 / WORKING ALONGSIDE HELICOPTER LIFT OPERATORS',
    'JJDS works alongside specialist helicopter lift operators, bringing experienced ground-based construction and installation support to the site. We coordinate our agreed works with the aviation team, from preparation through to installation and handover.', [
    ('Working alongside specialists', 'Experienced in working alongside helicopter lift teams, supporting the construction and installation scope on the ground.', ['Ground-based site experience','Coordination with specialist teams','Agreed construction and installation']),
    ('Understand the site interfaces', 'Coordinate the agreed JJDS work scope with the client, site management and appointed aviation provider.', ['Clear division of responsibilities','Installation access and sequencing','Defined work-area interfaces']),
    ('Construction preparation', 'Prepare the agreed fabrication and installation works to suit the project delivery sequence.', ['Component and connection readiness','Site fabrication and modifications','Installation documentation']),
    ('Work within site controls', 'JJDS personnel follow the project and aviation provider requirements relevant to their assigned work.', ['Site briefings and communication','Access and exclusion-area controls','Work timing agreed with site leads']),
    ('Installation after delivery', 'Undertake agreed mechanical and structural installation when components are released for that work.', ['Fit-up and assembly','Welding and structural connections','Inspection and handover records']),
    ('Specialist aviation. JJDS support.', 'Specialist operators manage aircraft, pilots and aerial-lift planning. JJDS works alongside them within the agreed ground scope.', ['Operator-led flight and lift activities','JJDS construction and installation','Clear roles and coordinated delivery']),
],5)

detail_page('CONTROLLED. DOCUMENTED.<br/>READY FOR HANDOVER.', '05 / HSEQ, QUALITY & PROJECT CONTROLS',
    'Project controls form part of delivery from scope review to closeout. Documentation and inspection requirements are defined for the agreed package and site requirements.', [
    ('Scope & commercial clarity', 'Review drawings, specifications, interfaces and programme requirements before mobilisation.', ['Defined inclusions and exclusions','Assumptions and risk notes','RFQ review and installation input']),
    ('Safety & mobilisation', 'Project-specific preparation supports safe work fronts, competent supervision and coordinated site activity.', ['SWMS and risk controls','Permits, pre-starts and site records','Contractor mobilisation documents']),
    ('Inspection & quality records', 'Inspection and Test Plans and installation checks support verification of the agreed works.', ['Inspection and test records','Traceability where required','Photos and completion evidence']),
    ('Progress & change control', 'Clear reporting keeps project teams informed of work completed, interfaces and scope changes.', ['Daily records and progress photos','Variation and scope-change records','Work-front coordination']),
    ('Completion & handover', 'Closeout support helps the client move from installation into commissioning and operation.', ['Punch-list closeout','Marked-up and as-built records','Commissioning support']),
    ('Start with a clear RFQ', 'Send the project scope, drawings, specifications, photos and programme for practical delivery review.', ['Site location and access conditions','Required shutdown or delivery dates','Documentation requirements']),
],6)


box(0,0,W,H,NAVY)
grid(0,H)
photo('IMG_0966.jpeg',360,0,236,180)
veil(360,0,236,180,.5)
text('JJDS INDUSTRIES  /  06  DELIVERY',38,26,510,9,HexColor('#9DC4FF'),True)
text('PLAN IT.<br/>INSTALL IT.<br/><font color="#68ABFF">HAND IT OVER.</font>',38,54,520,31,white,True,33)
steel(180)
text('A CONTROLLED PATH FROM RFQ TO COMPLETION',38,213,519,10,HexColor('#91BFFF'),True)
steps=[('Scope review','Drawings, specifications, interfaces, access and programme requirements.'),('Planning','Methodology, resources, procurement, SWMS, ITPs and installation sequencing.'),('Mobilisation','Site-ready supervision, trades, plant, tooling and project controls.'),('Installation','Coordinated mechanical, structural, pipework and associated site works.'),('Verification','Inspections, test records, punch-list closeout and commissioning support.'),('Handover','Completion records, marked-up documentation, photos and closeout support.')]
for i,(title,body) in enumerate(steps):
    x=38+(i%2)*268; y=243+(i//2)*78
    box(x,y,249,67,HexColor('#14273E'))
    box(x,y,34,27,BLUE)
    text(f'{i+1:02}',x+7,y+5,26,12,white,True)
    text(title,x+44,y+6,194,12,white,True)
    text(body,x+11,y+31,227,9,HexColor('#D2DCEA'),False,12)
text('WHERE WE WORK',38,484,510,10,HexColor('#91BFFF'),True)
text('Waste & recycling / Water treatment / Pump stations / Manufacturing<br/>Civil infrastructure / Councils / EPC contractors / Consulting engineers<br/>Remote & regional projects / Shutdowns & maintenance',38,508,520,9.5,white,False,16)
box(38,574,3,62,BLUE)
text('SITE LEADERSHIP. SAFETY. QUALITY.',52,574,504,12,white,True)
text('Boilermaker-led planning and practical supervision. Permits, pre-starts, daily records, progress photos, variation control and material or weld traceability where required.',52,597,500,9.5,HexColor('#D2DCEA'),False,13)
box(0,659,W,117,BLUE)
text("LET'S GET TO WORK.",38,672,520,26,white,True)
text('Send your drawings, RFQ or project scope.',38,710,520,10,white)
text('James Burnett  /  0427 626 101',38,733,520,13,white,True)
text('operations@jjdsindustries.com.au',38,756,520,10,white)
c.linkURL('mailto:operations@jjdsindustries.com.au',(38,H-773,350,H-752),relative=0)
c.linkURL('tel:+61427626101',(38,H-752,355,H-730),relative=0)
footer(7); c.save()
print(OUT)
