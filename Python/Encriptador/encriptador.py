# Encriptador de frases 
#El programa se encargara de reconocer una frase y cambiar las vocales por otros caracteres

import config               # importamos archivo en donde estará una lista con el abecedario completo 
                            # y otra con los caracteres a los que representará cada letra
def encriptador(palabra):
    encrip = []
    frase = list(palabra)
    for letras in range(len(frase)):
        for i in range(len(config.abcdario)):
            if frase[letras] == config.abcdario[i]:
                pivot = config.encripABC[i]
                encrip.append(pivot)
    palabraEncriptada = ''.join(encrip)
    return palabraEncriptada

        
if __name__ == "__main__":
    try:
        palabra = input("Escriba palabra solo con letras minusculas: ")
        print("La palabra encriotada es:",encriptador(palabra))

    except:
        print("Error!")
    