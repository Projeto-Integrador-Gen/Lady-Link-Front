import React from 'react'
import './About.css'
import { Box, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


function About() {

    return (
        <>
            <Grid className='font fontStyle'>
                <Grid>
                    <Box >
                        <Grid>
                            <Box >
                                <p>É uma empresa dedicada a realçar a potência e o poder das mulheres no mercado de trabalho. Acreditamos que todas as mulheres possuem habilidades e talentos únicos que merecem ser reconhecidos e valorizados. Por meio da nossa plataforma de rede social, buscamos criar um ambiente inclusivo e inspirador, onde as mulheres podem se conectar, compartilhar conhecimentos e alcançar o sucesso profissional.</p>
                            </Box>
                        </Grid>
                        <Grid>
                            <Box>
                                <li>Missão
                                </li>
                                <p>
                                    Nossa missão é promover a igualdade de gênero e empoderar as mulheres em suas carreiras. Queremos proporcionar oportunidades de crescimento, networking e aprendizado, ajudando-as a alcançar seus objetivos e a quebrar barreiras no mundo corporativo. Acreditamos que quando as mulheres são fortalecidas e encorajadas, elas podem conquistar qualquer coisa.
                                </p>
                            </Box>
                        </Grid>
                        <Grid>
                            <Box>
                                <li>Visão
                                </li>

                                <p>
                                    Queremos construir um mundo onde todas as mulheres tenham igualdade de oportunidades e sejam reconhecidas por seus talentos.
                                    <p>
                                        Promover a igualdade de gênero, inspirar e capacitar mulheres em suas carreiras. Buscamos quebrar barreiras, superar estereótipos e desigualdades salariais, oferecendo um ambiente de respeito e equidade.
                                    </p>
                                    <p>
                                        Nossa missão é  Através da nossa plataforma de rede social, queremos criar uma comunidade forte, onde mulheres possam se conectar, compartilhar conhecimentos e se apoiar mutuamente. Estamos comprometidos em transformar o presente e o futuro, tomando medidas concretas, estabelecendo parcerias estratégicas e programas de capacitação.

                                    </p>
                                    <p>Na Lady Link, nossa visão é ser um farol na capacitação das mulheres e na construção de um futuro brilhante e igualitário
                                    </p>
                                </p>
                            </Box>
                        </Grid>
                        <Grid>
                            <Box>
                                <li>Valores
                                </li>

                                <p>
                                    Empoderamento: Acreditamos no poder do empoderamento feminino para transformar vidas e impulsionar mudanças positivas na sociedade.
                                    <p>
                                        Inclusão: Defendemos a diversidade e a inclusão em todos os níveis. Nossa plataforma é um espaço acolhedor para mulheres de diferentes origens, etnias, orientações e habilidades.
                                    </p>
                                    <p>
                                        Colaboração: Valorizamos a colaboração e o compartilhamento de conhecimentos. Através da nossa rede, incentivamos as mulheres a se apoiarem mutuamente e a construírem relacionamentos significativos.
                                    </p>
                                    <p>
                                        Excelência: Buscamos a excelência em tudo o que fazemos, oferecendo uma plataforma de qualidade, recursos relevantes e experiências enriquecedoras para nossas usuárias.
                                    </p>
                                </p>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
                <Box className='fontcenter'>
                        <h3>Conheça nossa equipe</h3>
                    </Box>
                <Grid className='iconcenter'>
                    

                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                            <div>
                            
                                <Button  {...bindTrigger(popupState)}>
                                    <img className='imgprofile' src="https://avatars.githubusercontent.com/u/127573407?v=4" alt="Foto Perfil Bianca" />
                                </Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Box p={2}>
                                        <Typography>CEO e fundadora da Lady Link. Ela é apaixonada por promover a igualdade de gênero e é uma inspiração para todas as mulheres que desejam conquistar seus objetivos profissionais.</Typography>
                                    </Box>
                                </Popover>
                              </div>
                        )}
                    </PopupState>
                    
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                            <div>
                            
                                <Button  {...bindTrigger(popupState)}>
                                <img className='imgprofile' src="https://avatars.githubusercontent.com/u/129619376?v=4" alt="Foto Perfil Mike" />
                                </Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Box p={2}>
                                        <Typography>Desenvolvedor talentoso, responsável por criar e aprimorar a nossa plataforma para oferecer a melhor experiência possível às nossas usuárias.</Typography>
                                    </Box>
                                </Popover>
                              </div>
                        )}
                    </PopupState>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                            <div>
                            
                                <Button  {...bindTrigger(popupState)}>
                                <img className='imgprofile' src="https://avatars.githubusercontent.com/u/129702532?v=4" alt="Foto Perfil Lucas Assis" />
                                </Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Box p={2}>
                                        <Typography>Desenvolvedor especializado em front-end, garantindo que a interface da nossa plataforma seja atraente, intuitiva e fácil de usar.</Typography>
                                    </Box>
                                </Popover>
                              </div>
                        )}
                    </PopupState>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                            <div>
                            
                                <Button  {...bindTrigger(popupState)}>
                                <img className='imgprofile' src="https://avatars.githubusercontent.com/u/83048854?v=4" alt="Foto Perfil Lucas Reck" />
                                </Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Box p={2}>
                                        <Typography>Desenvolvedor back-end habilidoso, trabalhando nos bastidores para garantir que a nossa plataforma seja segura, estável e confiável.</Typography>
                                    </Box>
                                </Popover>
                              </div>
                        )}
                    </PopupState>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                            <div>
                            
                                <Button  {...bindTrigger(popupState)}>
                                <img className='imgprofile' src="https://avatars.githubusercontent.com/u/108840058?v=4" alt="Foto Perfil Lucas Reck" />
                                </Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Box p={2}>
                                        <Typography>Membro essencial da equipe de desenvolvimento, trazendo suas habilidades técnicas e experiência para melhorar constantemente nossos recursos.</Typography>
                                    </Box>
                                </Popover>
                              </div>
                        )}
                    </PopupState>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                            <div>
                            
                                <Button  {...bindTrigger(popupState)}>
                                <img className='imgprofile' src="https://avatars.githubusercontent.com/u/108590345?v=4" alt="Foto Perfil Sartori" />
                                </Button>
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Box p={2}>
                                        <Typography>Contribui para a equipe com suas habilidades de design, criando uma identidade visual única para a Lady Link e seus produtos.</Typography>
                                    </Box>
                                </Popover>
                              </div>
                        )}
                    </PopupState>
                </Grid>
                <h4 className='fontcenter'>
                        Na Lady Link, estamos comprometidos em capacitar mulheres e construir um futuro mais igualitário.
                    </h4>
                    <Grid className=' font fontcenter'>

                        <h5>
                            Junte-se a nós nessa jornada e descubra o seu potencial!
                        </h5>


                    </Grid>
            </Grid >
        </>
    )

}
export default About;