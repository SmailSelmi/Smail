# Media Migration Guide

To ensure your portfolio loads instantly for everyone, we're offloading your large video files to a CDN (Content Delivery Network).

## Steps to Migrate

### 1. Upload your videos

You have 3 large videos in `public/`:

- `Task-Management-App.mp4` (~5.7MB)
- `ecommerce-dashboard.mp4` (~9.0MB)
- `landingpage.mp4` (~5.0MB)

Upload these to **Cloudinary** (recommended) or **Vercel Blob**.

### 2. Get the URLs (Cloudinary)

1.  Open your **Cloudinary Media Library**.
2.  Hover over a video and click the **"Copy Link"** icon (or click the asset and copy the **URL** from the details sidebar).
3.  **Pro Tip**: Ensure the link starts with `https://res.cloudinary.com/...` and ends in `.mp4`.

### 3. Update `lib/data.ts`

Replace the local paths in the `projects` array with your new CDN URLs:

```typescript
// c:\Users\Administrator\Desktop\Smail\lib\data.ts

export const projects = [
  {
    title: "E-Commerce Dashboard",
    // ...
    video: "YOUR_CDN_URL_HERE", // instead of "/ecommerce-dashboard.mp4"
  },
  // ... rest of projects
];
```

### 4. Delete Local Files

Once you've verified the CDN links are working on your site, you can safely delete the `.mp4` files from the `public/` folder to keep your repository lean.
