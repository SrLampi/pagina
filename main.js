{document.querySelector('.encabezado__solidbars').addEventListener('click', () => { 
    document.querySelector ('.encabezado__desplegable').classList.toggle('show');
});
}
{document.querySelector('.barra-lateral', '.barra-lateral__ul', '.barra-lateral__ul--li').addEventListener('click', () => { 
    document.querySelector ('.barra-lateral').classList.toggle('barradesplegable');
});
}

{document.querySelector('.falsebotton-code').addEventListener('click', () => { 
    document.querySelector ('.select-code').classList.add('codigohtml');
    
});
}

{document.querySelector('.falsebotton-code').addEventListener('click', () => { 
    document.querySelector ('.select-ejem').classList.remove('resultado');
    
});
}

{document.querySelector('.falsebotton-result').addEventListener('click', () => { 
    document.querySelector ('.select-ejem').classList.add('resultado');
});
}

{document.querySelector('.falsebotton-result').addEventListener('click', () => { 
    document.querySelector ('.select-code').classList.remove('codigohtml');
    
});
}
