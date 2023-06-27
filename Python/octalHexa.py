
# Crea una función que reciba un número decimal y lo trasforme a Octal.
# -No está permitido usar funciones propias del lenguaje de programación que realicen esas operaciones directamente.

finalNumOctal = []
finalNumHexa = []

def octal(num):
    if num != 0:
        producto = int(num / 8)
        sobrante = int(num % 8)
        finalNumOctal.append(sobrante)
        octal(producto)

    inversa = finalNumOctal[::-1]
    numFinal = int(''.join(map(str, inversa)))

    return numFinal
    
    
if __name__ == "__main__":
    try:
        num = int(input("Ingrese un numero decimal: "))
        print("El numero en OCTAL es: ",octal(num))
    
    except:
        print("Error")
