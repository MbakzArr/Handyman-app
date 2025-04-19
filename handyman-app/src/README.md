# Nearby Handyman Booking App – Ionic Frontend

This is the **Ionic Angular frontend** for the Nearby Handyman Booking App. It allows users to:

- View a list of nearby handymen based on location.
- View detailed handyman profiles.
- Book appointments via date and time pickers.
- Admins can view all bookings from a dashboard.

---

## 📦 Tech Stack

- **Ionic Angular** (standalone components)
- **Leaflet.js** for map integration
- **HttpClient** for API communication
- **RouterModule** for navigation
- **Form & UI** with Ionic components
- Backend API served via Laravel (running at `http://localhost:8000`)

---

## 🧱 Folder Structure

```
src/
├── app/
│   ├── admin-dashboard/
│   ├── nearby-handymen/
│   ├── handyman-detail/
│   ├── booking-form/
│   └── services/api.service.ts
├── index.html
└── main.ts
```

---

## 📍 Pages and Features

### `Nearby Handymen Page`

- Lists all handymen within the user’s proximity.
- Uses geolocation (via passed lat/lng) to fetch from `/api/handymen/nearby`.
- Clickable list navigates to handyman detail.

### `Handyman Detail Page`

- Displays handyman name, skill, contact info, bio, availability.
- Includes Leaflet.js map showing handyman's location.
- "Book Now" button routes to booking form.

### `Booking Form Page`

- Date and time pickers using `<ion-datetime>`.
- Submits booking to backend via `/api/bookings`.

### `Admin Dashboard`

- Displays list of all bookings.
- Shows info about user, handyman, service, and datetime.

---

## 🗺️ Leaflet Map Integration

Leaflet is used to show handyman locations. In `handyman-detail.page.ts`, a map is initialized using:

```ts
L.map('map').setView([lat, lng], 13)
```

Map tiles from OpenStreetMap.

---

## 🔌 API Service

All HTTP calls are made from `api.service.ts`:

```ts
this.http.get(`${this.apiUrl}/handymen/nearby`)
this.http.post(`${this.apiUrl}/bookings`, payload)
```

---

## 🧪 Testing

Each page includes a unit test file (e.g. `booking-form.page.spec.ts`) that checks page creation using Angular’s `TestBed`.

---

## ⚙️ Setup & Run

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
ionic serve
```

Make sure your Laravel backend is also running on `http://localhost:8000`.

---

## 📋 Notes

- Replace static `user_id` in booking requests with actual user auth ID.
- Adjust map size in CSS if it doesn't appear correctly.
- Consider adding error handling and loading indicators in future updates.

---

## 📸 Screenshots (Optional)

You can add screenshots here using:

```markdown
![Nearby Handymen](screenshots/nearby-handymen.png)
```

---

## 🔐 Authentication (Future)

Currently, the app assumes the user is logged in and uses hardcoded user IDs. Authentication and registration will be handled in a future version.

---

## 💡 Author

Built with ❤️ for an interview assessment test.
