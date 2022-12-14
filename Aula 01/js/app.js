let post = {
    title : 'Título da minha pagina',
    excerpt : 'Introdução do meu texto',
    body : 'Conteúdo do meu Texto',
    tags : (
        'Tag 1',
        'Tag 2',
        'Tag 3',
        'Tag 4'
             
        )
}

let {
    title,
    excerpt,
    body,
    tags,
} = post;

var postHtml = `
<Article>
    <header>
        <h1>${title}</h1>
    </header>

    <section>
        <div>${excerpt}</div>
        <div>${body}</div>
    </section>
    <footer>
        <ul>
        ${tags.map( tags => `<li>${tag}</li>`).join('\n')};
        </ul>
    </footer>
</article>
`;

//document.querySelector('body').innerHTML = postHtml


let estados = [
    {
      "id": 1101,
      "nome": "Porto Velho",
      "UF": {
        "id": 11,
        "sigla": "RO",
        "nome": "Rondônia",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1102,
      "nome": "Ji-Paraná",
      "UF": {
        "id": 11,
        "sigla": "RO",
        "nome": "Rondônia",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1201,
      "nome": "Rio Branco",
      "UF": {
        "id": 12,
        "sigla": "AC",
        "nome": "Acre",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1202,
      "nome": "Cruzeiro do Sul",
      "UF": {
        "id": 12,
        "sigla": "AC",
        "nome": "Acre",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1301,
      "nome": "Manaus",
      "UF": {
        "id": 13,
        "sigla": "AM",
        "nome": "Amazonas",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1302,
      "nome": "Tefé",
      "UF": {
        "id": 13,
        "sigla": "AM",
        "nome": "Amazonas",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1303,
      "nome": "Lábrea",
      "UF": {
        "id": 13,
        "sigla": "AM",
        "nome": "Amazonas",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1304,
      "nome": "Parintins",
      "UF": {
        "id": 13,
        "sigla": "AM",
        "nome": "Amazonas",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1401,
      "nome": "Boa Vista",
      "UF": {
        "id": 14,
        "sigla": "RR",
        "nome": "Roraima",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1402,
      "nome": "Rorainópolis - Caracaraí",
      "UF": {
        "id": 14,
        "sigla": "RR",
        "nome": "Roraima",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1501,
      "nome": "Belém",
      "UF": {
        "id": 15,
        "sigla": "PA",
        "nome": "Pará",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1502,
      "nome": "Castanhal",
      "UF": {
        "id": 15,
        "sigla": "PA",
        "nome": "Pará",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1503,
      "nome": "Marabá",
      "UF": {
        "id": 15,
        "sigla": "PA",
        "nome": "Pará",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1504,
      "nome": "Redenção",
      "UF": {
        "id": 15,
        "sigla": "PA",
        "nome": "Pará",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1505,
      "nome": "Santarém",
      "UF": {
        "id": 15,
        "sigla": "PA",
        "nome": "Pará",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1506,
      "nome": "Altamira",
      "UF": {
        "id": 15,
        "sigla": "PA",
        "nome": "Pará",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1507,
      "nome": "Breves",
      "UF": {
        "id": 15,
        "sigla": "PA",
        "nome": "Pará",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1601,
      "nome": "Macapá",
      "UF": {
        "id": 16,
        "sigla": "AP",
        "nome": "Amapá",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1602,
      "nome": "Oiapoque - Porto Grande",
      "UF": {
        "id": 16,
        "sigla": "AP",
        "nome": "Amapá",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1701,
      "nome": "Palmas",
      "UF": {
        "id": 17,
        "sigla": "TO",
        "nome": "Tocantins",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1702,
      "nome": "Araguaína",
      "UF": {
        "id": 17,
        "sigla": "TO",
        "nome": "Tocantins",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 1703,
      "nome": "Gurupi",
      "UF": {
        "id": 17,
        "sigla": "TO",
        "nome": "Tocantins",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    },
    {
      "id": 2101,
      "nome": "São Luís",
      "UF": {
        "id": 21,
        "sigla": "MA",
        "nome": "Maranhão",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2102,
      "nome": "Santa Inês - Bacabal",
      "UF": {
        "id": 21,
        "sigla": "MA",
        "nome": "Maranhão",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2103,
      "nome": "Caxias",
      "UF": {
        "id": 21,
        "sigla": "MA",
        "nome": "Maranhão",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2104,
      "nome": "Presidente Dutra",
      "UF": {
        "id": 21,
        "sigla": "MA",
        "nome": "Maranhão",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2105,
      "nome": "Imperatriz",
      "UF": {
        "id": 21,
        "sigla": "MA",
        "nome": "Maranhão",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2201,
      "nome": "Teresina",
      "UF": {
        "id": 22,
        "sigla": "PI",
        "nome": "Piauí",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2202,
      "nome": "Parnaíba",
      "UF": {
        "id": 22,
        "sigla": "PI",
        "nome": "Piauí",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2203,
      "nome": "Picos",
      "UF": {
        "id": 22,
        "sigla": "PI",
        "nome": "Piauí",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2204,
      "nome": "São Raimundo Nonato",
      "UF": {
        "id": 22,
        "sigla": "PI",
        "nome": "Piauí",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2205,
      "nome": "Corrente - Bom Jesus",
      "UF": {
        "id": 22,
        "sigla": "PI",
        "nome": "Piauí",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2206,
      "nome": "Floriano",
      "UF": {
        "id": 22,
        "sigla": "PI",
        "nome": "Piauí",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2301,
      "nome": "Fortaleza",
      "UF": {
        "id": 23,
        "sigla": "CE",
        "nome": "Ceará",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2302,
      "nome": "Quixadá",
      "UF": {
        "id": 23,
        "sigla": "CE",
        "nome": "Ceará",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2303,
      "nome": "Iguatu",
      "UF": {
        "id": 23,
        "sigla": "CE",
        "nome": "Ceará",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2304,
      "nome": "Juazeiro do Norte",
      "UF": {
        "id": 23,
        "sigla": "CE",
        "nome": "Ceará",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2305,
      "nome": "Crateús",
      "UF": {
        "id": 23,
        "sigla": "CE",
        "nome": "Ceará",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2306,
      "nome": "Sobral",
      "UF": {
        "id": 23,
        "sigla": "CE",
        "nome": "Ceará",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2401,
      "nome": "Natal",
      "UF": {
        "id": 24,
        "sigla": "RN",
        "nome": "Rio Grande do Norte",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2402,
      "nome": "Caicó",
      "UF": {
        "id": 24,
        "sigla": "RN",
        "nome": "Rio Grande do Norte",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2403,
      "nome": "Mossoró",
      "UF": {
        "id": 24,
        "sigla": "RN",
        "nome": "Rio Grande do Norte",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2501,
      "nome": "João Pessoa",
      "UF": {
        "id": 25,
        "sigla": "PB",
        "nome": "Paraíba",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2502,
      "nome": "Campina Grande",
      "UF": {
        "id": 25,
        "sigla": "PB",
        "nome": "Paraíba",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2503,
      "nome": "Patos",
      "UF": {
        "id": 25,
        "sigla": "PB",
        "nome": "Paraíba",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2504,
      "nome": "Sousa - Cajazeiras",
      "UF": {
        "id": 25,
        "sigla": "PB",
        "nome": "Paraíba",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2601,
      "nome": "Recife",
      "UF": {
        "id": 26,
        "sigla": "PE",
        "nome": "Pernambuco",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2602,
      "nome": "Caruaru",
      "UF": {
        "id": 26,
        "sigla": "PE",
        "nome": "Pernambuco",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2603,
      "nome": "Serra Talhada",
      "UF": {
        "id": 26,
        "sigla": "PE",
        "nome": "Pernambuco",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2604,
      "nome": "Petrolina",
      "UF": {
        "id": 26,
        "sigla": "PE",
        "nome": "Pernambuco",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2701,
      "nome": "Maceió",
      "UF": {
        "id": 27,
        "sigla": "AL",
        "nome": "Alagoas",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2702,
      "nome": "Arapiraca",
      "UF": {
        "id": 27,
        "sigla": "AL",
        "nome": "Alagoas",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2801,
      "nome": "Aracaju",
      "UF": {
        "id": 28,
        "sigla": "SE",
        "nome": "Sergipe",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2802,
      "nome": "Itabaiana",
      "UF": {
        "id": 28,
        "sigla": "SE",
        "nome": "Sergipe",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2901,
      "nome": "Salvador",
      "UF": {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2902,
      "nome": "Santo Antônio de Jesus",
      "UF": {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2903,
      "nome": "Ilhéus - Itabuna",
      "UF": {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2904,
      "nome": "Vitória da Conquista",
      "UF": {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2905,
      "nome": "Guanambi",
      "UF": {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2906,
      "nome": "Barreiras",
      "UF": {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2907,
      "nome": "Irecê",
      "UF": {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2908,
      "nome": "Juazeiro",
      "UF": {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2909,
      "nome": "Paulo Afonso",
      "UF": {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 2910,
      "nome": "Feira de Santana",
      "UF": {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
          "id": 2,
          "sigla": "NE",
          "nome": "Nordeste"
        }
      }
    },
    {
      "id": 3101,
      "nome": "Belo Horizonte",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3102,
      "nome": "Montes Claros",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3103,
      "nome": "Teófilo Otoni",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3104,
      "nome": "Governador Valadares",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3105,
      "nome": "Ipatinga",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3106,
      "nome": "Juíz de Fora",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3107,
      "nome": "Barbacena",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3108,
      "nome": "Varginha",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3109,
      "nome": "Pouso Alegre",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3110,
      "nome": "Uberaba",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3111,
      "nome": "Uberlândia",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3112,
      "nome": "Patos de Minas",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3113,
      "nome": "Divinópolis",
      "UF": {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3201,
      "nome": "Vitória",
      "UF": {
        "id": 32,
        "sigla": "ES",
        "nome": "Espírito Santo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3202,
      "nome": "São Mateus",
      "UF": {
        "id": 32,
        "sigla": "ES",
        "nome": "Espírito Santo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3203,
      "nome": "Colatina",
      "UF": {
        "id": 32,
        "sigla": "ES",
        "nome": "Espírito Santo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3204,
      "nome": "Cachoeiro do Itapemirim",
      "UF": {
        "id": 32,
        "sigla": "ES",
        "nome": "Espírito Santo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3301,
      "nome": "Rio de Janeiro",
      "UF": {
        "id": 33,
        "sigla": "RJ",
        "nome": "Rio de Janeiro",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3302,
      "nome": "Volta Redonda - Barra Mansa",
      "UF": {
        "id": 33,
        "sigla": "RJ",
        "nome": "Rio de Janeiro",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3303,
      "nome": "Petrópolis",
      "UF": {
        "id": 33,
        "sigla": "RJ",
        "nome": "Rio de Janeiro",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3304,
      "nome": "Campos dos Goytacazes",
      "UF": {
        "id": 33,
        "sigla": "RJ",
        "nome": "Rio de Janeiro",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3305,
      "nome": "Macaé - Rio das Ostras - Cabo Frio",
      "UF": {
        "id": 33,
        "sigla": "RJ",
        "nome": "Rio de Janeiro",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3501,
      "nome": "São Paulo",
      "UF": {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3502,
      "nome": "Sorocaba",
      "UF": {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3503,
      "nome": "Bauru",
      "UF": {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3504,
      "nome": "Marília",
      "UF": {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3505,
      "nome": "Presidente Prudente",
      "UF": {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3506,
      "nome": "Araçatuba",
      "UF": {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3507,
      "nome": "São José do Rio Preto",
      "UF": {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3508,
      "nome": "Ribeirão Preto",
      "UF": {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3509,
      "nome": "Araraquara",
      "UF": {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3510,
      "nome": "Campinas",
      "UF": {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 3511,
      "nome": "São José dos Campos",
      "UF": {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
          "id": 3,
          "sigla": "SE",
          "nome": "Sudeste"
        }
      }
    },
    {
      "id": 4101,
      "nome": "Curitiba",
      "UF": {
        "id": 41,
        "sigla": "PR",
        "nome": "Paraná",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4102,
      "nome": "Guarapuava",
      "UF": {
        "id": 41,
        "sigla": "PR",
        "nome": "Paraná",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4103,
      "nome": "Cascavel",
      "UF": {
        "id": 41,
        "sigla": "PR",
        "nome": "Paraná",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4104,
      "nome": "Maringá",
      "UF": {
        "id": 41,
        "sigla": "PR",
        "nome": "Paraná",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4105,
      "nome": "Londrina",
      "UF": {
        "id": 41,
        "sigla": "PR",
        "nome": "Paraná",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4106,
      "nome": "Ponta Grossa",
      "UF": {
        "id": 41,
        "sigla": "PR",
        "nome": "Paraná",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4201,
      "nome": "Florianópolis",
      "UF": {
        "id": 42,
        "sigla": "SC",
        "nome": "Santa Catarina",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4202,
      "nome": "Criciúma",
      "UF": {
        "id": 42,
        "sigla": "SC",
        "nome": "Santa Catarina",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4203,
      "nome": "Lages",
      "UF": {
        "id": 42,
        "sigla": "SC",
        "nome": "Santa Catarina",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4204,
      "nome": "Chapecó",
      "UF": {
        "id": 42,
        "sigla": "SC",
        "nome": "Santa Catarina",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4205,
      "nome": "Caçador",
      "UF": {
        "id": 42,
        "sigla": "SC",
        "nome": "Santa Catarina",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4206,
      "nome": "Joinville",
      "UF": {
        "id": 42,
        "sigla": "SC",
        "nome": "Santa Catarina",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4207,
      "nome": "Blumenau",
      "UF": {
        "id": 42,
        "sigla": "SC",
        "nome": "Santa Catarina",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4301,
      "nome": "Porto Alegre",
      "UF": {
        "id": 43,
        "sigla": "RS",
        "nome": "Rio Grande do Sul",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4302,
      "nome": "Pelotas",
      "UF": {
        "id": 43,
        "sigla": "RS",
        "nome": "Rio Grande do Sul",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4303,
      "nome": "Santa Maria",
      "UF": {
        "id": 43,
        "sigla": "RS",
        "nome": "Rio Grande do Sul",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4304,
      "nome": "Uruguaiana",
      "UF": {
        "id": 43,
        "sigla": "RS",
        "nome": "Rio Grande do Sul",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4305,
      "nome": "Ijuí",
      "UF": {
        "id": 43,
        "sigla": "RS",
        "nome": "Rio Grande do Sul",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4306,
      "nome": "Passo Fundo",
      "UF": {
        "id": 43,
        "sigla": "RS",
        "nome": "Rio Grande do Sul",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4307,
      "nome": "Caxias do Sul",
      "UF": {
        "id": 43,
        "sigla": "RS",
        "nome": "Rio Grande do Sul",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 4308,
      "nome": "Santa Cruz do Sul - Lajeado",
      "UF": {
        "id": 43,
        "sigla": "RS",
        "nome": "Rio Grande do Sul",
        "regiao": {
          "id": 4,
          "sigla": "S",
          "nome": "Sul"
        }
      }
    },
    {
      "id": 5001,
      "nome": "Campo Grande",
      "UF": {
        "id": 50,
        "sigla": "MS",
        "nome": "Mato Grosso do Sul",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5002,
      "nome": "Dourados",
      "UF": {
        "id": 50,
        "sigla": "MS",
        "nome": "Mato Grosso do Sul",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5003,
      "nome": "Corumbá",
      "UF": {
        "id": 50,
        "sigla": "MS",
        "nome": "Mato Grosso do Sul",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5101,
      "nome": "Cuiabá",
      "UF": {
        "id": 51,
        "sigla": "MT",
        "nome": "Mato Grosso",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5102,
      "nome": "Cáceres",
      "UF": {
        "id": 51,
        "sigla": "MT",
        "nome": "Mato Grosso",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5103,
      "nome": "Sinop",
      "UF": {
        "id": 51,
        "sigla": "MT",
        "nome": "Mato Grosso",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5104,
      "nome": "Barra do Garças",
      "UF": {
        "id": 51,
        "sigla": "MT",
        "nome": "Mato Grosso",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5105,
      "nome": "Rondonópolis",
      "UF": {
        "id": 51,
        "sigla": "MT",
        "nome": "Mato Grosso",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5201,
      "nome": "Goiânia",
      "UF": {
        "id": 52,
        "sigla": "GO",
        "nome": "Goiás",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5202,
      "nome": "Itumbiara",
      "UF": {
        "id": 52,
        "sigla": "GO",
        "nome": "Goiás",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5203,
      "nome": "Rio Verde",
      "UF": {
        "id": 52,
        "sigla": "GO",
        "nome": "Goiás",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5204,
      "nome": "São Luís de Montes Belos - Iporá",
      "UF": {
        "id": 52,
        "sigla": "GO",
        "nome": "Goiás",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5205,
      "nome": "Porangatu - Uruaçu",
      "UF": {
        "id": 52,
        "sigla": "GO",
        "nome": "Goiás",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5206,
      "nome": "Luziânia - Águas Lindas de Goiás",
      "UF": {
        "id": 52,
        "sigla": "GO",
        "nome": "Goiás",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    },
    {
      "id": 5301,
      "nome": "Distrito Federal",
      "UF": {
        "id": 53,
        "sigla": "DF",
        "nome": "Distrito Federal",
        "regiao": {
          "id": 5,
          "sigla": "CO",
          "nome": "Centro-Oeste"
        }
      }
    }
  ]

let options = `<option value="">Selecione o estado</option>`;
for (let i = 0; i < estados.length; i++) {
   options += `<option value="${estados[i].sigla}">${estados[i].nome}</option>`;   
}

document.querySelector('select').innerHTMl = options;

const valorQuenaoMuda = 0;

//Comentário de uma linha

/**
 * Comentário de linhas
 * @var valor int
 */

function print(valor)