import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { useEffect, useState } from "react";
import { CidadesService } from "../../shared/services/api/cidades/CidadesService";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";

export const Dashboard = () => {

  const [isLoadingCidades, setIsLoadingCidades] = useState(true);
  const [totalCountCidades, SetTotalCountCidades] = useState(0);

  const [isLoadingPessoas, setIsLoadingPessoas] = useState(true);
  const [totalCountPessoas, SetTotalCountPessoas] = useState(0);

  useEffect(() => {
    setIsLoadingCidades(true);
    setIsLoadingCidades(true);

    CidadesService.getAll(1).then((result) => {

      setIsLoadingCidades(false);

      if (result instanceof Error) {
        alert(result.message);
      } else {
        SetTotalCountCidades(result.totalCount);
      }
    });

    PessoasService.getAll(1).then((result) => {

      setIsLoadingPessoas(false);

      if (result instanceof Error) {
        alert(result.message);
      } else {
        SetTotalCountPessoas(result.totalCount);
      }
    });
  }, []);

  return (
    <LayoutBaseDePagina titulo="Dashboard">

      <Box width="100%" display="flex">
        <Grid container margin={2}>
          <Grid container item spacing={2}>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    Total de Pessoas
                  </Typography>

                  <Box padding={6} display="flex" justifyContent="center" alignItems="center">

                    {!isLoadingPessoas && (
                      <Typography variant="h1" >
                        {totalCountPessoas}
                      </Typography>
                    )}

                    {isLoadingPessoas && (
                      <Typography variant="h6" >
                        Carregando ...
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardContent>

                  <Typography variant="h5" align="center">
                    Total de Cidades
                  </Typography>

                  <Box padding={6} display="flex" justifyContent="center" alignItems="center">

                    {!isLoadingCidades && (
                      <Typography variant="h1" >
                        {totalCountCidades}
                      </Typography>
                    )}

                    {isLoadingCidades && (
                      <Typography variant="h6" >
                        Carregando ...
                      </Typography>
                    )}
                  </Box>

                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Grid>
      </Box>
    </LayoutBaseDePagina>
  );
};
