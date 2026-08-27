Add a new event/brand to the sponsorship proposals project.

## Input from user
- **BrandName**: $ARGUMENTS (e.g. `reactAdvancedCanada`)
- **SanityID**: Ask the user for the Sanity `_id` if not provided

## How to get the Sanity ID
The user needs to:
1. Go to `sponsors.sanity.studio`
2. Click on **BRAND** and select the brand
3. Click the **three dots** (top right) → **Inspect**
4. Copy the `_id` value

## Where to place the new entry (ordering rule)

**Never blindly append to the end.** Brands of the same family must stay grouped together.

Two brands belong to the same family when only the **suffix** (city / region / edition) differs
while the base name is identical — e.g. `aicodingsummit`, `aicodingsummitnyc`,
`aicodingsummitberlin`, `aicodingsummitasia`, or `reactSummit`, `reactsummitus`,
`reactsummitAsia`, or `techleadconf`, `techleadconfLondon`.

Placement algorithm:
1. Strip the suffix from the new BrandName to get its base (`aicodingsummitasia` → `aicodingsummit`).
2. Look for existing entries starting with that base (case-insensitive — casing is inconsistent in
   this repo: `reactSummit` vs `reactsummitus`).
3. **If the family exists** → insert directly **after the last member of that family**, in both
   `config.js` and `build-all-brands`.
4. **If no family exists** → append at the end.

Apply the same ordering in **both** files, so the two lists stay in the same order.

## Steps to perform

### 1. Add brandID to `frontend/content/config.js`
- Open `frontend/content/config.js`
- In the `brandIDs` object, add a new entry: `BrandName: "SanityID",`
- Place it per the **ordering rule** above (next to its family, not at the end)
- Verify the brand doesn't already exist before adding

### 2. Add brand to `build-all-brands` in `frontend/package.json`
- Open `frontend/package.json`
- In `scripts.build-all-brands`, add `'BRAND_NAME=<BrandName> yarn build'` to the concurrently command
- Place it per the **ordering rule** above, matching the position used in `config.js`
- Verify the brand doesn't already exist in the command

### 3. Commit the changes
- Stage both files: `frontend/content/config.js` and `frontend/package.json`
- Commit with message: `add <BrandName> to sponsorship proposals`

## Reminders
- The sponsor page URL requires a **trailing slash** to work
- Redirects are configured in a separate project (the conference website), not here
- After committing, the conference needs to be deployed
