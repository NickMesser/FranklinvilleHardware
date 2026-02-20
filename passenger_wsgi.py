import sys
import os

sys.path.insert(0, os.path.dirname(__file__))

VENV = os.path.join(os.path.dirname(__file__), "venv", "lib", "python3.11", "site-packages")
if os.path.isdir(VENV):
    sys.path.insert(0, VENV)

from app import app as application
