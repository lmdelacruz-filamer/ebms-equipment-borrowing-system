# EBMS: Equipment Borrowing Management System

A web app for an office that lends out equipment. Admins keep the inventory, register borrowers, issue items and record returns, so they always know what is on the shelf, who has which item and when it is due back.

**Live demo:** https://ebms-demo-kappa.vercel.app/login
Login `demo` / `ebmsdemo2026` (the demo resets to sample data).

## What it does

- **Inventory:** equipment grouped by category, with photos and a total quantity per item.
- **Borrowers:** register people by student or employee ID.
- **Borrowing:** issue one or more units to a borrower with an expected return date. You can't borrow more units than are available.
- **Returns:** process returns and keep a full borrow and return log.
- **Dashboard:** stock, available, on-loan and borrower totals.
- Available units are counted live from open borrow records, and old records keep the borrower and item names even if those are deleted later.

Built with Django 4.2, MySQL, Tailwind CSS and JavaScript. Academic team project (3 members).

## Run it on your computer

You need Python 3.12 and MySQL (XAMPP works).

1. Create a MySQL database named `ebms_db`. The app connects as `root` with no password on `127.0.0.1:3306`. Change `DATABASES` in `ebms_app/settings.py` if yours is different.
   Copy `.env.example` to `.env`, set `SECRET_KEY` to a long random string, and set `DB_PASSWORD` if your MySQL user has one.
2. Install the packages and build the tables:
   ```bash
   python -m venv .venv
   .venv\Scripts\activate          # Mac/Linux: source .venv/bin/activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py createsuperuser
   ```
3. Start the server with `python manage.py runserver` and open http://127.0.0.1:8000/login.

The compiled stylesheet is already included. Run `npm install` and `npm run tailwind` only if you change the styles.

Secrets live in `.env`, which git ignores. `DEBUG = True` in `settings.py` is for local use only. Turn it off before putting the app online.

## Note on secrets

This repository does not include the project's secret key or database password. Copy `.env.example` to `.env` and fill in your own values before running the app. Never commit `.env`.
