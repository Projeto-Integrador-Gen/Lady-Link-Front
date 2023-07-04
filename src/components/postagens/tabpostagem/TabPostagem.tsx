import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
      setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
        <Tabs centered indicatorColor="secondary" onChange={handleChange} className='nav'>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='descricao'>Nosso objetivo é garantir a participação plena e efetiva das mulheres e a igualdade de oportunidades, reconhecer e valorizar o trabalho de assistência e doméstico não remunerado, ajudando a resolver um problema socioeconômico e conectando mulheres ao mercado de trabalho.Mesmo que as empresas estejam caminhando para garantir a inclusão e os direitos das mulheres no mercado de trabalho, ainda nos deparamos com alguns pontos de atenção.

Um relatório do Banco Mundial apontou que, mesmo as mulheres sendo a maioria da população brasileira e ainda 43% da força total de trabalho, elas ainda têm baixo nível de ocupação nos cargos de liderança. Por exemplo, somente 37% das vagas são destinadas a uma gerência feminina, e 10,5% das cadeiras parlamentares são ocupadas por mulheres.

Dessa forma, é possível perceber que, mesmo com todo avanço e luta inclusiva, as mulheres ainda são discriminadas em relação aos homens quando o assunto é ascensão profissional.

De forma geral, o público feminino está relacionado com trabalhos de menores salários, tendo inclusive rendimentos menores do que os dos homens, atuando na mesma empresa e no mesmo cargo. </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;