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
- https://codecept.io/bdd/#what-is-behavior-driven-development
- https://codecept.io/locators/#locator-builder
- https://codecept.io/helpers/#helper-examples
- https://codecept.io/helpers/Playwright/#seeelement
- https://stackoverflow.com/questions/1070398/how-to-set-a-value-of-a-variable-inside-a-template-code
- https://docs.djangoproject.com/en/4.2/topics/class-based-views/intro/#handling-forms-with-class-based-views
- https://www.papaparse.com/
- https://realpython.com/pytest-python-testing/

## Install
```bash

python3 -m venv .venv
pip3 install -r requirements.txt

# Database etc...
python manage.py migrate
python manage.py createsuperuser

# tests unitaires
pip3 install pytest

# tests e2e
cd tests/e2e 
pnpm install
```

## Launch dev

```bash
source .venv/bin/activate
(cd backend && python3 manage.py runserver)

# tests fonctionels
(cd tests && ./run_tests.sh)

# tests e2e
cd tests/e2e 

```

## Transforms

```bash
# Gestion de la map
code backend/templates_ui/pages/home.html

# Gestion du formulaire de saisie d'adresse
code backend/templates_ui/pages/address.html
```