'use client'

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const numuros = {
  romanos: {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  },
  arabicos: {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
};

function ConversorNumeros() {
  const [valorInput, setValorInput] = useState('');
  const [result, setResult] = useState('');

  function handleInputChange (event) {
      setValorInput(event.target.value.toUpperCase()) 
  };

  function convertToArabic (romano) {
    let arabico = 0;
    let valorAnterior = 0;

    romano.split('').reverse().forEach((letra) => {
      const valorAtual = numuros.romanos[letra];

      if (valorAtual >= valorAnterior) {
        arabico += valorAtual;
      } else {
        arabico -= valorAtual;
      }

      valorAnterior = valorAtual;
    });

    setResult(arabico);
  };

  function convertToRoman (arabico) {
    let romano = '';
    const valoresArabicos = Object.keys(numuros.arabicos).sort((a, b) => b - a);

    valoresArabicos.forEach((valor) => {
      while (arabico >= valor) {
        romano += numuros.arabicos[valor];
        arabico -= valor;
      }
    });

    setResult(romano);
  };

  return (
    <main className={styles.main}>
      <Link href='./' className={styles.links}>Voltar para página de desafios</Link>
      <div className={styles.container}>
        <h2 className={styles.container__titulo}>Conversor de Números Romanos</h2>
        <input className={styles.container__input} type="text" value={valorInput} onChange={handleInputChange} />
        <div className={styles.container__botoes}> 
          <button className={styles.container__botoes__botao} onClick={() => convertToArabic(valorInput)}>Converter para Arábico</button> 
          <button className={styles.container__botoes__botao} onClick={() => convertToRoman(Number(valorInput))}>Converter para Romano</button>                
        </div>
        <p className={styles.container__resultado}>{result}</p>
      </div>
    </main>
  );
}

export default ConversorNumeros;
