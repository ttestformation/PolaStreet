- 👋 Hi, I’m @ttestformation
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...

<!---
ttestformation/ttestformation is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->

## Biblio
- https://leafletjs.com/examples/quick-start/

## Install
```bash

python3 -m venv .venv
pip3 install -r requirements.txt

# Database etc...
python manage.py migrate
python manage.py createsuperuser

```

## Launch dev

```bash
source .venv/bin/activate
(cd backend && python3 manage.py runserver)
```

## Transforms

```bash
# Gestion de la map
code backend/templates_ui/pages/home.html

# Gestion du formulaire de saisie d'adresse
code backend/templates_ui/pages/address.html
```