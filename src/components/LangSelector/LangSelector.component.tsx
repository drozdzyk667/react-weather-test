import React from 'react';
import i18n from 'modules/WeatherChecker/translations/translations';
import { Box, makeStyles } from '@material-ui/core';
import { Icon } from 'components/Icon/Icon.component';
import {
  languages,
  MAX_NUMBER_OF_LETTERS,
} from './helpers/LangSelector.constants';
import { PersistMenu } from './components/PersistMenu/PersistMenu.component';

const useStyles = makeStyles({
  root: {
    margin: '0 20px',
  },
  pointer: {
    cursor: 'pointer',
  },
});

export const LangSelector: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | Element>(null);
  const detectedLangName = i18n.language.slice(0, MAX_NUMBER_OF_LETTERS);
  const handleOpenMenu = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (name: string) => {
    const foundElement = languages.find((lang) => lang.name === name);
    if (foundElement) {
      handleChangeLanguage(name);
    }
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box className={classes.root}>
      <Box onClickCapture={handleOpenMenu} role='button' tabIndex={0}>
        <Icon
          className={classes.pointer}
          fontSize='large'
          name={detectedLangName}
        />
      </Box>
      <PersistMenu onCloseMenu={handleCloseMenu} anchorEl={anchorEl} />
    </Box>
  );
};
