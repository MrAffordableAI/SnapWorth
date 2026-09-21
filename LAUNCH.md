# SnapWorth — launch to market

## 1. Validate the 5-second demo

1. Open the app.
2. Photograph a tool, chair, coin, or thrift item.
3. Confirm Result + Sell It copy feel useful.
4. Copy the listing into Marketplace as a dry run (do not publish junk).

## 2. Replace the demo identifier

Wire one vision provider:

- Capture photo → compress to ~1MB JPEG
- Prompt: identify object, era, condition, resale range in USD, value factors, Marketplace title + description
- Return strict JSON matching the Result screen

Keep the 3-scan free cap server-side when you add accounts.

## 3. Ship mobile

Recommended path matching other MrAffordableAI apps:

1. Wrap this UI in Expo (React Native WebView or rebuild screens in RN).
2. Add `expo-image-picker` + `expo-camera`.
3. Add RevenueCat or Expo IAP:
   - monthly $5.99
   - annual $29.99
   - optional $1.99 / 10 extra scans later
4. Privacy policy + “not an appraisal” disclaimer.
5. App Store screenshots: Home, Result (Craftsman drill example), Sell It, History.

## 4. Store listing copy

**Name:** SnapWorth  
**Subtitle:** What is this worth?  
**Description:** Snap a photo of a thrift-store find, tool, antique, or collectible. Get an identification, resale range, and a ready-to-paste Marketplace listing.

**Keywords:** resale, thrift, antique, estimate, marketplace, ebay, garage sale, collectible

## 5. Distribution order

1. Web test (this repo / GitHub Pages)
2. TestFlight / Play internal track
3. Product Hunt + Facebook Marketplace seller groups
4. TikTok/Reels: Goodwill-to-listing 5-second demo

## 6. Legal

- Not a certified appraisal
- No guarantee of sale price
- Do not store child photos; no school-notice features in v1
- If you add accounts, use a US privacy policy and delete-history control
