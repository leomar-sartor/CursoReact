import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProp {
    children?: React.ReactNode
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProp> = () => {

  const theme = useTheme();
  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
    >
      <Button
        color="primary"
        disableElevation
        variant="contained"
        startIcon={<Icon>save</Icon>}
      >
        Salvar
      </Button>

      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>save</Icon>}
      >
        Salvar e Voltar
      </Button>

      <Button
        color="primary"
        disableElevation
        variant="outlined"
        endIcon={<Icon>delete</Icon>}
      >
        Apagar
      </Button>

      <Button
        color="primary"
        disableElevation
        variant="outlined"
        endIcon={<Icon>add</Icon>}
      >
        Novo
      </Button>

      <Divider variant="middle" orientation="vertical"/>

      <Button
        color="primary"
        disableElevation
        variant="outlined"
        endIcon={<Icon>arrow_back</Icon>}
      >
        Voltar
      </Button>
    </Box>
  );
};