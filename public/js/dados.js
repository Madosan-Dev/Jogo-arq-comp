const perguntas = [
    {
        pergunta: "Qual componente do computador é responsável central por processar informações?",
        opcoes: [
            { texto: "Placa-mãe", correta: false },
            { texto: "Memória RAM", correta: false },
            { texto: "CPU", correta: true },
            { texto: "Disco Rígido", correta: false }
        ]
    },
    {
        pergunta: "Em um sistema que envolve calculos usamos um componente do hardware, como é chamada?",
        opcoes: [
            { texto: "Unidade de Controle (UC)", correta: false },
            { texto: "ULA", correta: true },
            { texto: "Registrador", correta: false },
            { texto: "Barramento", correta: false }
        ]
    },
    {
        pergunta: "Qual o componente do hardware volatil, localizado no interior do processador, armazena uma quantidade pequena de informações volateis que são processadas no mesmo nanosegundo?",
        opcoes: [
            { texto: "Cache L3", correta: false },
            { texto: "Memória Flash", correta: false },
            { texto: "Registrador", correta: true },
            { texto: "RAM", correta: false }
        ]
    },
    {
        pergunta: "Qual componente de hardware, classificado como memoria principal, tem a função de armazenar informações volateis, e se não receber energia os dados são perdidos?",
        opcoes: [
            { texto: "ROM", correta: false },
            { texto: "RAM", correta: true },
            { texto: "HD", correta: false },
            { texto: "SSD", correta: false }
        ]
    },
    {
        pergunta: "Qual componente de hardware, classificado como mémoria secundaria tem a função de guardar uma grande escala de informações, mesmo não recebendo energia?",
        opcoes: [
            { texto: "RAM", correta: false },
            { texto: "Memória Cache", correta: false },
            { texto: "Registrador", correta: false },
            { texto: "HD", correta: true }
        ]
    },
    {
        pergunta: "Qual o componente de hardware não volatil, tem a função de guardar uma quantidade pequenas de informações essenciais para o funcionamento do sistema?",
        opcoes: [
            { texto: "RAM", correta: false },
            { texto: "ROM", correta: true },
            { texto: "Cache L1", correta: false },
            { texto: "Registrador", correta: false }
        ]
    },
    {
        pergunta: "Qual o componente de hardware não volatil, tem a função de guardar uma quantidade grande de informações, que retem os dados mesmo sem energia e permite a ler e gravar dados eletricamente pelo usuário?",
        opcoes: [
            { texto: "Flash", correta: true },
            { texto: "EPROM", correta: false },
            { texto: "PROM", correta: false },
            { texto: "RAM", correta: false }
        ]
    },
    {
        pergunta: "Qual o componente de hardware não volatil, tem a função de guardar uma quantidade pequena de informações, retem os dados mesmo sem energia e para ser apagado precisa ficar exposto a luz ultravioleta?",
        opcoes: [
            { texto: "EEPROM", correta: false },
            { texto: "EPROM", correta: true },
            { texto: "Memória Flash", correta: false },
            { texto: "ROM Mask", correta: false }
        ]
    },
    {
        pergunta: "Os componentes se comunicam entre si, o que faz eles trocarem informações sem precisar do processamento, como isso é chamado?",
        opcoes: [
            { texto: "Polling", correta: false },
            { texto: "Interrupção", correta: false },
            { texto: "DMA", correta: true },
            { texto: "Pipelining", correta: false }
        ]
    },
    {
        pergunta: "Qual componente de um microcontrolador tem uma função que tem como analogia um interruptor de atenção do componente externo?",
        opcoes: [
            { texto: "Chip Select", correta: true },
            { texto: "Interrupção", correta: false },
            { texto: "Interruptor Digital", correta: false },
            { texto: "DMA", correta: false }
        ]
    },
    {
        pergunta: "Qual o componente responsavel por transmitir endereços de memoria e levar até o dispositivo I/O?",
        opcoes: [
            { texto: "Data Bus", correta: false },
            { texto: "Control Bus", correta: false },
            { texto: "Address Bus", correta: true },
            { texto: "Ponte Norte", correta: false }
        ]
    },
    {
        pergunta: "Qual o componente responsavel por transmitir dados para o processamento?",
        opcoes: [
            { texto: "Address Bus", correta: false },
            { texto: "Data Bus", correta: true },
            { texto: "Control Bus", correta: false },
            { texto: "PCI Express", correta: false }
        ]
    },
    {
        pergunta: "Dentre processadores da Intel entre I3 a I9, qual é a linha intermediaria que tem o foco de entregar desempenho e custo beneficio?",
        opcoes: [
            { texto: "i3", correta: false },
            { texto: "i5", correta: true },
            { texto: "i7", correta: false },
            { texto: "i9", correta: false }
        ]
    },
    {
        pergunta: "Dentre processadores da Intel entre I3 a I9, qual a linha de alto desempenho que tem uma grande quantidade de núcleos e tem suporte a tecnologia Hyper-Threading?",
        opcoes: [
            { texto: "i3", correta: false },
            { texto: "i5", correta: false },
            { texto: "i7", correta: true },
            { texto: "Pentium", correta: false }
        ]
    },
    {
        pergunta: "Qual o termo correto caso o processador tenha duas unidades processamento independentes?",
        opcoes: [
            { texto: "Quad-Core", correta: false },
            { texto: "Octa-Core", correta: false },
            { texto: "Single-Core", correta: false },
            { texto: "Dual-Core", correta: true }
        ]
    },
    {
        pergunta: "Qual o termo correto caso o processador tenha quatro unidades processamento independentes?",
        opcoes: [
            { texto: "Dual-Core", correta: false },
            { texto: "Hexa-Core", correta: false },
            { texto: "Quad-Core", correta: true },
            { texto: "Octa-Core", correta: false }
        ]
    }
];