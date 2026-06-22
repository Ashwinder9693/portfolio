# Certifications

All certifications shown on the portfolio, with verification links.

> **Source of truth:** the live site is generated from the `certifications` array in
> [`src/data/skills.js`](src/data/skills.js). This file is a human-readable mirror — to add or
> change a certification **on the site**, edit `src/data/skills.js` (then update this file to match).

**Total:** 16 certifications

| # | Certification | Issuer | Year | Credential |
|---|---------------|--------|------|------------|
| 1 | OCI 2025 Certified Data Science Professional | Oracle | 2025 | [Verify](https://catalog-education.oracle.com/ords/certview/sharebadge?id=988A3B3E34A14AB93DB7CEA7ADA3B547A071660FCA05FA1EEF87789172628692) |
| 2 | Oracle AI Vector Search Certified Professional | Oracle | 2025 | [Verify](https://catalog-education.oracle.com/ords/certview/sharebadge?id=E748DC72370C9B821AE623A76B6D1486D8B45B2E171929D454CBBBA14F1D64FC) |
| 3 | OCI 2025 Certified Generative AI Professional | Oracle | 2025 | [Verify](https://catalog-education.oracle.com/ords/certview/sharebadge?id=2C1A569C4AEA010E4690480411DF0CF21F8C45F8199116376E72DB8D2F9571C6) |
| 4 | OCI 2025 Certified AI Foundations Associate | Oracle | 2025 | [Verify](https://catalog-education.oracle.com/ords/certview/sharebadge?id=FA8665AF741EF83B202CC227986DF90EE384EF2DA12F964577EA3CD4D58932A1) |
| 5 | AWS Solutions Architecture Job Simulation | Forage | 2025 | [Certificate](https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_u2tg483ruExzuLBpv_1761323862287_completion_certificate.pdf) |
| 6 | Introduction to Software Development | Coursera | 2024 | [Verify](https://www.coursera.org/account/accomplishments/verify/29TL45U4JP1K) |
| 7 | Professional Workspace Administrator Specialization | Google | 2024 | [Verify](https://www.coursera.org/account/accomplishments/specialization/LDQ0L3UBRXYX) |
| 8 | Problem Solving (Intermediate) | HackerRank | 2024 | [Verify](https://www.hackerrank.com/certificates/d439e170cc88) |
| 9 | Introduction to Python | HackerRank | 2024 | [Verify](https://www.hackerrank.com/certificates/2db071bb6417) |
| 10 | GitHub Foundations | GitHub | 2024 | [Verify](https://www.credly.com/badges/18a22b84-4f24-4730-ba8f-b7d6d908aa11/public_url) |
| 11 | Foundations of Cybersecurity | Google | 2024 | [Verify](https://www.coursera.org/account/accomplishments/verify/5ZCQJRN5TGYH) |
| 12 | Project Management Foundation (NASBA) | LinkedIn Learning | 2024 | [Certificate](https://drive.google.com/file/d/1OTUa1pYFDcHMiKWdbtx98y58AEX93QvH/view) |
| 13 | Getting Started with AI | NVIDIA | 2024 | [Certificate](https://drive.google.com/file/d/1ON6hWZMIYnJscWHjtJATEykhNoFCAQ3C/view) |
| 14 | CS50: Introduction to Computer Science | Harvard | 2023 | [Certificate](https://certificates.cs50.io/e919d34c-573d-4036-905b-e38dfea2ca4d.pdf?size=letter) |
| 15 | Master Trigonometry and Calculus in MATLAB | Udemy | 2023 | [Verify](https://www.udemy.com/certificate/UC-b4e60207-eb6e-4f32-84a8-93f53f688c63/) |
| 16 | Computer Operations & Programming Assistance | NCVT | 2022 | [Verify](https://ncvtmis.gov.in/Pages/Certification/Validate.aspx?Key=210320000000659) |

---

## How to add a new certification

1. Open [`src/data/skills.js`](src/data/skills.js) and add an object to the `certifications` array:
   ```js
   {
     name: "Certification Name",
     issuer: "Issuing Organization",
     year: "2026",
     url: "https://link-to-credential"   // verification or certificate URL
   }
   ```
2. Add a matching row to the table above so this list stays in sync.
