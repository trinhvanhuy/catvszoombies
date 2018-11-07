# Gwapit Test

Python test
To do the test please do the following :  
1. setup core tu use gwapit-test-db  
2. create 2 API routes allowing to do the following
    1. GET /cat : expose list of cats
    2. GET /zombie : expose list of zombie
     
CATS
```
[
    {
        name: Minou
        icon: http://i.giphy.com/l4KhS0BOFBhU2SYIU.gif
        life: 100
        attack: 28
        defense: 12
    },
    {
        name: Lion
        icon: http://i.giphy.com/l41lTn1liPDzkv0Zi.gif
        life: 65
        attack: 10
        defense: 27
    },
    {
        name: Litchi
        icon: http://i.giphy.com/emWySpOLFLUAM.gif
        life: 80
        attack: 48
        defense: 1
    },
]
```

ZOMBIES
```
[
    {
        name: Beyonce
        icon: http://i.giphy.com/hyYMouu2tR5mM.gif
        life: 98
        attack: 24
        defense: 5
    },
    {
        name: Franck
        icon: http://i.giphy.com/4cfV5bkDSYUx2.gif
        life: 87
        attack: 5
        defense: 25
    },
    {
        name: Freak
        icon: http://i.giphy.com/NKSq1x79SPTGg.gif
        life: 75
        attack: 45
        defense: 7
    },
]
```


Share screen with :
https://meet.jit.si

Access API
http://test.hr.gwapit.in:9081/api/

Start project
* `docker-compose up -d core` for python project
* `docker-compose up -d web` for angular project
