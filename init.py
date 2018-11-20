import os

directories = [
    'src/app/components/',
    'src/app/components/layout/',
    'src/app/components/content/',
    'src/app/guards/',
    'src/app/interceptors/',
    'src/app/models/',
    'src/app/modules/',
    'src/app/routes/',
    'src/app/pipes/',
    'src/app/store/',
    'src/assets/styles/',
    'src/assets/styles/00_base/',
    'src/assets/styles/01_atoms/',
    'src/assets/styles/02_molecules/',
    'src/assets/styles/03_organisms/',
    'src/assets/styles/05_atoms/',
    'src/assets/styles/04_pages/',
]
for directory in directories:
    path = ('./' + directory)
    if not os.path.exists(path):
        try:  
            os.mkdir(path)
        except OSError:  
            print ("Creation of the directory %s failed" % path)
        else:  
            print ("Successfully created the directory %s " % path)