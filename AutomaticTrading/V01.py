# 1초에 한번씩 현재가 가져오기
import pyupbit
import pprint

f = open("upbit.txt")
lines = f.readlines()
access = lines[0].strip()
secret = lines[1].strip()
f.close()
upbit = pybit.Ubit(access, secret)

uuid = ""
resp = upbit.cancel_order(uuid)
pprint.pprint(resp)