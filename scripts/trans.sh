#!/bin/bash
curl --header "x-access-token: eyJhbGciOiJIUzI1NiJ9.YWxhbg.FZQAlRPZNkF-4hdIVaMPu2Oi-2anM_8297tQAU-9syE" -H "Content-Type: application/json" -X POST -d '{"origin":1,"target":2, "amount":123.000}' http://localhost:3000/transaction/swap -v