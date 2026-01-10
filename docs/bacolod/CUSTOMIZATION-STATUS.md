# Bacolod City Content Customization Status

**Last Updated:** January 11, 2026
**Overall Progress:** 58% (28 of 48 service files completed)

---

## 📊 Summary

### Content Status

- ✅ **Completed:** 28 Bacolod-specific service files (7 categories)
- ⏳ **Remaining:** 20 service files across 5 categories + Phase 8
- 🎯 **Next Priority:** Phase 8 (Legal & Civil) - 4 files

### Technical Status

- ✅ All 12 service category cards working on /services page
- ✅ All routing and yamlLoader configurations fixed
- ✅ All index.yaml files properly configured
- ⚠️ Some index.yaml files still have generic "your LGU" descriptions

---

## ✅ Completed Categories (28 files)

### Phase 1: Health Services (4 files)

**Status:** ✅ Complete - Bacolod-specific
**Location:** `content/services/health-services/`

- Free check-ups, medicines, vaccines
- Maternal care and child immunization
- Local hospital treatment/confinement
- Health programs (nutrition, dengue, TB)

**Bacolod Data:**

- City Health Office (CHO): cho@bacolodcity.gov.ph
- Corazon Locsin Montelibano Memorial Regional Hospital
- Barangay health centers across 61 barangays
- PhilHealth enrollment assistance

---

### Phase 2: Business Services (4 files)

**Status:** ✅ Complete - Bacolod-specific
**Location:** `content/services/business/`

- Barangay clearance and mayor's business permits
- Permit renewal and local business taxes
- Rent stalls in public markets
- Trade fairs, business expos, tourism promotions

**Bacolod Data:**

- Business Permits & Licensing Office (BPLO): bplo@bacolodcity.gov.ph
- City Treasurer's Office tax payments
- Central Public Market, Libertad Market, Burgos Market
- MassKara Festival trade opportunities

---

### Phase 3: Education Services (4 files)

**Status:** ✅ Complete - Bacolod-specific
**Location:** `content/services/education/`

- Enroll children in daycare/preschool programs
- Apply for local scholarships
- Educational support programs from LGU
- Supplementary activities for schools

**Bacolod Data:**

- DepEd Bacolod Division Office: www.depedbacolod.net
- City Scholarship Program (500+ scholars annually)
- 61 public elementary schools, 16 public high schools
- Special education programs

---

### Phase 4: Waste Management (4 files)

**Status:** ✅ Complete - Bacolod-specific
**Location:** `content/services/garbage-waste-disposal/`
**Commit:** bf359b8 (Critical fix - replaced Cebu data with Bacolod)

- Garbage collection schedules and pickup requests
- Proper waste segregation and disposal methods
- Report illegal dumping or violations
- Special waste collection (hazardous, electronics)

**Bacolod Data:**

- BENRO (Environment Office): enrobcd@bacolodcity.gov.ph
- ISWIMS (Integrated Solid Waste Information Management System)
- Bacolod Recovery Center: (034) 704-0281
- Barangay-specific garbage schedules

---

### Phase 5: Transportation Services (4 files)

**Status:** ✅ Complete - Bacolod-specific
**Location:** `content/services/transportation/`
**Commits:** 0ed9d96, 342a33f, b44aa45, 40e1af1

- Public transport routes and schedules
- Transport permits and franchise registration
- Traffic violations and penalties
- Parking zones and parking permits

**Bacolod Data:**

- BTTMD (Bacolod Traffic & Transportation Mgmt Division): bttmd@bacolodcity.gov.ph
- BTAO (Bacolod Transport & Auxiliary Office): btao@bacolodcity.gov.ph
- **CommuteBacolod.com** - real-time transit info
- BREDCO Port ferry to Iloilo
- 18 major jeepney routes

---

### Phase 6: Social Welfare Services (4 files)

**Status:** ✅ Complete - Bacolod-specific
**Location:** `content/services/social-welfare/`
**Commits:** 8c919b1, 572becf
**Fact-checked:** docs/bacolod/PHASE-6-FACT-CHECK.md

- Senior citizen benefits and discounts (RA 9994)
- PWD ID and disability benefits (RA 7277, 10754, 11228)
- Solo parent ID and benefits (RA 8972)
- Social welfare programs and financial assistance

**Bacolod Data:**

- DSSD (Social Services): dssd@bacolodcity.gov.ph, (034) 432-1602
- 20% discounts for seniors, PWDs, solo parents
- Social pension: ₱500/month for indigent seniors
- 4Ps (Pantawid Pamilyang Pilipino Program)
- Medical assistance, burial aid, crisis intervention

---

### Phase 7: Public Safety (4 files)

**Status:** ✅ Complete - Bacolod-specific
**Location:** `content/services/public-safety/`
**Commits:** 572becf, 342a33f, b44aa45, 40e1af1

- Fire Safety Inspection Certificate (FSIC) from BFP
- Emergency hotlines and disaster response (911, DRRMO)
- Disaster preparedness and emergency planning
- Report crimes and public safety concerns

**Bacolod Data:**

- **911** nationwide emergency hotline
- BFP Bacolod: (034) 434-9122, (034) 432-7196
- DRRMO 24/7 Hotlines: (034) 432-3871 to 73, +63 930 243 4706
- PNP reporting, WCPU for domestic violence
- Evacuation centers in all 61 barangays
- Fire safety requirements for business permits

---

## ⏳ Phase 8: Legal & Civil Services (0/4 files)

**Status:** ❌ Not Started - Next Priority!
**Location:** `content/services/` (category to be determined)

### Planned Services:

1. **Civil Registration** - birth certificates, marriage, death certificates
2. **Legal Assistance** - PAO (Public Attorney's Office), IBP legal aid
3. **Notarial Services** - document notarization, affidavits
4. **Cedula/Community Tax Certificate** - application and renewal

**Data Needed:**

- Local Civil Registrar Office contact info
- PAO Bacolod office details
- Notarial services locations and fees
- Cedula application procedures and fees

---

## ❌ Missing Categories (16 files)

These categories have index.yaml configurations but **no actual content files** yet. They currently show on the website with generic descriptions.

### 1. Agriculture & Fisheries (0/4 files)

**Location:** `content/services/agriculture-fisheries/`
**Relevance to Bacolod:** Medium (city has some urban farming, but limited fishing)

**Services Defined in index.yaml:**

- Ask for free seeds, seedlings, fertilizers, or fingerlings
- Get veterinary services for livestock
- Attend farming or fishing training
- Borrow farm tools or equipment from LGU

**Bacolod Agency:** City Agriculture Office (CAO)
**Status:** Index.yaml exists, no .md files

---

### 2. Disaster Preparedness (0/3 files)

**Location:** `content/services/disaster-preparedness/`
**Relevance to Bacolod:** HIGH (typhoons, floods, earthquakes)

**Services Defined in index.yaml:**

- Join disaster drills and evacuation planning
- Learn about emergency response procedures and evacuation routes
- Access disaster preparedness information and early warning systems

**Bacolod Agency:** DRRMO
**Status:** Index.yaml exists, no .md files
**Note:** Some disaster content already covered in Phase 7 (Public Safety). May have overlap.

---

### 3. Environment (0/2 files)

**Location:** `content/services/environment/`
**Relevance to Bacolod:** HIGH (BENRO programs, coastal cleanup)

**Services Defined in index.yaml:**

- Join clean-up drives and tree planting activities
- Report illegal logging, quarrying, or fishing

**Bacolod Agency:** BENRO (Bacolod Environment & Natural Resources Office)
**Contact:** enrobcd@bacolodcity.gov.ph
**Status:** Index.yaml exists, no .md files
**Note:** Some overlap with waste management (Phase 4)

---

### 4. Housing & Land Use (0/3 files)

**Location:** `content/services/housing-land-use/`
**Relevance to Bacolod:** HIGH (socialized housing, zoning, building permits)

**Services Defined in index.yaml:**

- Apply for socialized housing or relocation projects
- Request zoning, land use, or building permits
- Ask about available relocation sites in case of demolition

**Bacolod Agencies:**

- Office of Building Officials (OBO): obo@bacolodcity.gov.ph
- City Engineer's Office (CEO): ceo@bacolodcity.gov.ph
- Housing & Urban Dev Office

**Status:** Index.yaml exists, no .md files

---

### 5. Infrastructure & Public Works (0/4 files)

**Location:** `content/services/infrastructure-public-works/`
**Relevance to Bacolod:** HIGH (road repairs, public facilities)

**Services Defined in index.yaml:**

- Report damaged roads, bridges, or drainage
- Request access to barangay water supply systems
- Use public facilities like gyms, barangay halls, multipurpose centers
- Rent stalls in public markets or use LGU-managed cemeteries

**Bacolod Agencies:**

- City Engineer's Office (CEO): ceo@bacolodcity.gov.ph
- Bacolod Water District (BACIWA): www.baciwa.gov.ph
- Public markets (covered in Business)

**Status:** Index.yaml exists, no .md files

---

## 🔧 Technical Issues Fixed

### Issue 1: Missing Service Category Cards (Fixed Jan 11)

**Problem:** Transportation and Public Safety categories not showing on /services page
**Root Cause:** Missing entries in `src/data/services.yaml`
**Fix:** Commit b44aa45 - Added Transportation and Public Safety categories
**Status:** ✅ Fixed

### Issue 2: Empty Service Listings (Fixed Jan 11)

**Problem:** /services/transportation and /services/public-safety showing empty cards
**Root Cause:** Missing imports in `src/data/yamlLoader.ts` categoryIndexMap
**Fix:** Commit 40e1af1 - Added transportationIndex and publicSafetyIndex imports
**Status:** ✅ Fixed

### Issue 3: Wrong City Data in Waste Management (Fixed Jan 8)

**Problem:** Cebu/Lapu-Lapu data instead of Bacolod in garbage-waste-disposal files
**Root Cause:** Copy-paste error from template
**Fix:** Commit bf359b8 - Replaced all Cebu data with Bacolod (CENRO→BENRO, (032)→(034))
**Status:** ✅ Fixed

---

## ⚠️ Remaining Issues

### Generic "Your LGU" Text in index.yaml Files

**Affected Files:**

- `content/services/housing-land-use/index.yaml`
- `content/services/infrastructure-public-works/index.yaml`
- `content/services/health-services/index.yaml`
- `content/services/education/index.yaml`
- `content/services/agriculture-fisheries/index.yaml`
- `content/services/business/index.yaml`

**Issue:** Service descriptions still contain generic text like "your local government" instead of "Bacolod City Government"

**Impact:** Minor - only affects service card descriptions, actual content files are fine

**Recommendation:** Update descriptions in index.yaml files to use Bacolod-specific language

---

## 📈 Progress Metrics

### By Phase:

- Phases 1-7: **100% complete** (28 files)
- Phase 8: **0% complete** (0/4 files)
- Overall Phase Progress: **87.5%** (7/8 phases)

### By Total Service Files:

- Completed: **28 files** (Bacolod-specific)
- Phase 8 Remaining: **4 files**
- Other Categories: **16 files** (have index.yaml but no content)
- **Total: 48 service files needed**
- **Current Progress: 58%**

### By Category:

- ✅ Complete (7): Health, Business, Education, Waste, Transportation, Social Welfare, Public Safety
- ⏳ Phase 8 (1): Legal & Civil
- ❌ No Content (5): Agriculture, Disaster Prep, Environment, Housing, Infrastructure

---

## 🎯 Recommended Next Steps

### Priority 1: Complete Phase 8 (Legal & Civil)

**Estimated Files:** 4
**Agencies to Research:**

- Local Civil Registrar (birth/death/marriage certificates)
- Public Attorney's Office (PAO) Bacolod
- City Treasurer (cedula/community tax certificate)
- Notarial services locations

### Priority 2: High-Impact Missing Categories

**Recommended Order:**

1. **Housing & Land Use** (3 files) - Building permits, zoning, socialized housing
2. **Environment** (2 files) - BENRO clean-up drives, reporting violations
3. **Infrastructure** (4 files) - Road repairs, public facilities, water supply

### Priority 3: Lower Priority Categories

**Optional (City-focused, less relevant):**

1. **Agriculture & Fisheries** (4 files) - Limited applicability for urban Bacolod
2. **Disaster Preparedness** (3 files) - Already covered extensively in Phase 7

### Priority 4: Polish & Quality

- Update all index.yaml files to remove generic "your LGU" language
- Add more Bacolod-specific context and local knowledge
- Verify all phone numbers, emails, and office addresses are current
- Add more photos and visual elements where appropriate

---

## 📝 Source Verification

All Phase 6 and Phase 7 content has been **fact-checked** against official sources:

**Official Government Sources:**

- bacolodcity.gov.ph (contact pages, hotlines, department info)
- Official Gazette (Republic Acts: RA 9994, RA 7277, RA 10754, RA 11228, RA 8972, RA 9514)
- DSWD (social welfare programs, 4Ps)
- NCDA (PWD benefits)

**Third-Party Verified:**

- CommuteBacolod.com (transportation routes)
- BACIWA.gov.ph (water district info)

**Fact-Check Document:** `docs/bacolod/PHASE-6-FACT-CHECK.md`

---

## 🚀 Deployment Status

**Git Branch:** `bacolod-customization`
**Latest Commits:**

- 40e1af1 - Fix yamlLoader for transportation/public-safety
- b44aa45 - Add Transportation and Public Safety to services.yaml
- 342a33f - Add transportation index.yaml
- 572becf - Fix social-welfare index.yaml
- 8c919b1 - Phase 6 Social Welfare complete
- 0ed9d96 - Phase 5 Transportation complete
- bf359b8 - Phase 4 CRITICAL FIX (Cebu → Bacolod)

**Status:** Ready for Phase 8 development

---

**Report Generated:** January 11, 2026
**Next Update:** After Phase 8 completion
