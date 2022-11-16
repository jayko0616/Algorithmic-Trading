import pyupbit
import pprint

f = open("./upbit.txt")
lines = f.readlines()
access = lines[0].strip()
secret = lines[1].strip()
f.close()

upbit = pyupbit.Upbit(access, secret)
balance = upbit.get_balances()
pprint.pprint(balance[0])