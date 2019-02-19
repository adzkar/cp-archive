x,y = map(int, input().split(' '))
i = 0
while x != 0 and y != 0 and i <= 65:
	lists = []
	for j in range(1,x):
		a = int(input())
		lists.append(a)
	lists.sort()
	# for j in range(1,x):
	# 	print(lists[j])
	i += 1