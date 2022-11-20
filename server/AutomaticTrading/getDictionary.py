#{'코인이름': 가격}
import sys
import pyupbit
import json

def getDictionary(access, secret):
    print(">>>딕셔너리 파이썬 실행<<<")

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

    coin_name_amount_json = json.dumps(dictionary)

    print(balances[0])
    print(coin_name_amount_json)
    return coin_name_amount_json

if __name__ == '__main__':
    getDictionary(sys.argv[1],sys.argv[2])
