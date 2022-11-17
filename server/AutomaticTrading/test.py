import pyupbit

f = open("./upbit.txt")
lines = f.readlines()
access = lines[0].strip()
secret = lines[1].strip()
f.close()

upbit = pyupbit.Upbit(access, secret)
amount = upbit.get_amount('ALL')
print(amount)
    