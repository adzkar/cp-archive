n = int(input())
clouds = list()
for i in range(int(n)):
    x = input()
    clouds.append(int(x))
passed = list()
i = 0
j = 0
while (int(i) < int(n) and int(j) < int(n)):
    i += (int(1), int(2))[i + 2 < n and clouds[int(i)+2] != 1]
    passed.append(int(i))
    j += 1
print((len(passed),len(passed)-1)[passed[len(passed)-1] > n]-1)
