PRIV_KEY=./PRIVATEKEY.key; 
echo eyJ1cmwiOiJodHRwczovL2FjbWUtdjAyLmFwaS5sZXRzZW5jcnlwdC5vcmcvYWNtZS9uZXctYWNjdCIsImFsZyI6IlJTMjU2Iiwibm9uY2UiOiIwMTAxR3RvYWFqLXJreW5vY1RrVGtWc2tiVXpBMG1pSDljd2w0dk9vZndRcDUwVSIsImp3ayI6eyJlIjoiQVFBQiIsImt0eSI6IlJTQSIsIm4iOiIwalRET3loeEs1TTV4bHJzcnlUNU9QV1BVN01HQWg4dzI4RHo0MGJVSEdMMUpJRGNQTXZiaUk4NzBzLTNKSENpYi1ZQ19nLTk3Rm9PTkpnVW5KbnhZQXlGcno5bnpBeXNESFkteGhYT1FPbFpkcEJ3ajFEZndyYzdKSjM1Zi1kVmVHZ1RaQXF6UEpLUmhuVjhVcW5KZk44dmktQnZSbkZlbVg3ZDNsbFV4UmFWcGVVZEFlNmhmY2pyYndpY2NJWHBpTG9aMExwT2p4MDlIeElxNVYyckhpZnhnOHByem81OENKU1l0TlJhcHNxajAwOUozN0lYNTQ0VV9ER183emxCMEtUS0tJdG85QjRlMlJKM2FnRk4ycEd0bnVwX1Z4STRHRUFKVk8wY3BDN1BZb1lKbVdkRGRPdTdDeXZBbkdFWjc4RWtscFZOSm9Xc1h4dHZvZHZRcVEifX0.eyJ0ZXJtc09mU2VydmljZUFncmVlZCI6dHJ1ZX0 | openssl dgst -sha256 -hex -sign ./PRIVATEKEY.key