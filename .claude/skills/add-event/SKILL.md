---
name: add-event
description: Add a new event/brand to the sponsorship proposals project. Use when the user wants to add a new conference brand.
---

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

## Steps to perform

### 1. Add brandID to `frontend/content/config.js`
- Open `frontend/content/config.js`
- In the `brandIDs` object, add a new entry: `BrandName: "SanityID",`
- Add it at the end of the object, before the closing `};`
- Verify the brand doesn't already exist before adding

### 2. Add brand to `build-all-brands` in `frontend/package.json`
- Open `frontend/package.json`
- In `scripts.build-all-brands`, append `'BRAND_NAME=<BrandName> yarn build'` to the concurrently command
- Verify the brand doesn't already exist in the command

### 3. Commit the changes
- Stage both files: `frontend/content/config.js` and `frontend/package.json`
- Commit with message: `add <BrandName> to sponsorship proposals`

## Reminders
- The sponsor page URL requires a **trailing slash** to work
- Redirects are configured in a separate project (the conference website), not here
- After committing, the conference needs to be deployed
