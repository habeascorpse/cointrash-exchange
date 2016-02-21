#!/usr/bin/env bash
curl -X POST -H "Content-Type: application/json" -d '{"login":"alan","password":"xyz"}' http://localhost:3000/user/authenticate -v