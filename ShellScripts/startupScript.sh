#! /bin/bash

echo starting venv setup
cd
cd vscode/portfolio_2025
scripts/venv.sh
source venv/bin/activate

echo venv setup finished

echo starting version checks

# Setup Python libraries for Notebook conversion
pip install nbconvert  # library for notebook conversion
pip install nbformat  # notebook file utility
pip install pyyaml  # notebook frontmatter

#show versions
# Show the active Ruby version, it needs to be 3 or higher
    ruby -v
# Bundler version, it is part of Ruby install
    bundle -v

# Show active Python version, it needs to be 3.10 or better (mine should currently be 3.10.12)
    python --version

# Show Jupyter packages, nbconvert needs to be in the list of installed
    jupyter --version
echo version checks finished
