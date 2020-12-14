import React from 'react';
import { Menu, MenuItem, makeStyles, Typography } from '@material-ui/core';
import { Lang } from 'components/LangSelector/helpers/LangSelector.constants';
import { languages } from 'components/LangSelector/helpers/LangSelector.constants';
import { useTranslation } from 'react-i18next';
import { Icon } from 'components/Icon/Icon.component';
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
  itemText: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),
  },
  pointer: {
    cursor: 'pointer',
  },
  langContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
}));

interface PersistMenu {
  onCloseMenu: (name: string) => void;
  anchorEl: null | Element;
}

export const PersistMenu: React.FC<PersistMenu> = React.forwardRef(
  (props, ref) => {
    const { onCloseMenu: handleCloseMenu, anchorEl } = props;
    const { t } = useTranslation();
    const classes = useStyles();

    return (
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        ref={ref}
      >
        {languages.map((lang: Lang) => (
          <MenuItem
            key={lang.name}
            className={classes.langContainer}
            onClick={() => handleCloseMenu(lang.name)}
          >
            <Icon name={lang.name} />
            <Typography className={cx(classes.pointer, classes.itemText)}>
              {t(lang.translation)}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    );
  }
);
