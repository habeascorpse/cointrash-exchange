#!/bin/bash
curl -X POST -H "Content-Type: application/json" -d '{"login":"alan","password":"xyz", "mail":"habeascorpse@gmail.com", "name": "Alan de"}' http://localhost:3000/user/create -v