#{'코인이름': 가격}
import sys
import pyupbit

def getList(access, secret):

    upbit = pyupbit.Upbit(access, secret)
    dic = {}
    list = []
    balances = upbit.get_balances()
    n = len(balances)

    for i in range(0,n):
        dic['label'] = balances[i]['currency']
        if balances[i]['currency'] == 'KRW':
            dic['value'] = upbit.get_balance()
        else:
            dic['value'] = upbit.get_amount(balances[i]['currency'])
            
        list.append(dic)
        dic={}
    
    print(list)
    return list

    

if __name__ == '__main__':
    getList(sys.argv[1],sys.argv[2])