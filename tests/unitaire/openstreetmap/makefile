.ONESHELL:

# Signifies our desired python version
PY = python3

# .PHONY defines parts of the makefile that are not dependant on any specific file
# This is most often used to store functions
.PHONY = help clean setup

# define Makefile's current directory
ROOT_DIR :=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

# define the name of the virtual environment directory
# used only to create virtual environment
VENV = venv
VENV_BIN=$(VENV)/bin

# Defines the default target that `make` will to try to make, or in the case of a phony target, execute the specified commands
# This target is executed whenever we just type `make`
.DEFAULT_GOAL = help

.SILENT: setup clean $(VENV) $(VENV_BIN)/activate

# The @ makes sure that the command itself isn't echoed in the terminal
help:
	@echo "setup     - prepare the environment"
	@echo "clean     - remove the virtual environment"

$(VENV_BIN)/activate:
	test -d $(VENV) || $(PY) -m venv $(VENV)

$(VENV): $(VENV_BIN)/activate
	touch $(VENV)

setup: requirements.txt $(VENV)
	$(VENV_BIN)/pip install --upgrade "pip>=21.3.1" --quiet 
	$(VENV_BIN)/pip install -r requirements.txt --quiet

clean:
	rm -rf $(VENV)