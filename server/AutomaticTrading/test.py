import pyupbit

f = open("./upbit.txt")
lines = f.readlines()
access = lines[0].strip()
secret = lines[1].strip()
f.close()

upbit = pyupbit.Upbit(access, secret)
coin_name_list = list()
coin_amount_list = list()
balances = upbit.get_balances()
n = len(balances)

for i in range(0,n):
    coin_name_list.append(balances[i]['currency'])


for i in range(0,n):
    if balances[i]['currency'] == 'KRW':
        coin_amount_list.append(upbit.get_balance())
        continue
    coin_amount_list.append(upbit.get_amount(coin_name_list[i]))

dictionary = dict(zip(coin_name_list,coin_amount_list))

coin_name_amount_json = json.loads(dictionary)