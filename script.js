/**
 * Fio & Cuidado — Lógica Interativa Oficial (script.js)
 * 100% Client-Side, sem dependência de backend, compatível com GitHub Pages
 */

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initImageFallbacks();
    initHairTypeModal();
    initHairQuiz();
    initFaqTipAssistant();
    initMobileNavigation();
    initSmoothScroll();
  });
}

/* ==========================================================================
   0. Garantia Definitiva de Carregamento de Imagens no GitHub Pages (/fioss/)
   ========================================================================== */
const FALLBACK_SVGS = {
  'hair-liso.svg': 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" fill="none"><defs><linearGradient id="lisoBg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="%23E0F2FE"/><stop offset="1" stop-color="%23BAE6FD"/></linearGradient><linearGradient id="lisoFios" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="%230284C7"/><stop offset="1" stop-color="%230369A1"/></linearGradient></defs><rect width="120" height="120" rx="30" fill="url(%23lisoBg)"/><circle cx="60" cy="60" r="46" fill="%23FFFFFF" fill-opacity="0.85"/><line x1="42" y1="28" x2="42" y2="92" stroke="url(%23lisoFios)" stroke-width="4.5" stroke-linecap="round"/><line x1="51" y1="24" x2="51" y2="96" stroke="url(%23lisoFios)" stroke-width="4.5" stroke-linecap="round"/><line x1="60" y1="22" x2="60" y2="98" stroke="url(%23lisoFios)" stroke-width="5" stroke-linecap="round"/><line x1="69" y1="24" x2="69" y2="96" stroke="url(%23lisoFios)" stroke-width="4.5" stroke-linecap="round"/><line x1="78" y1="28" x2="78" y2="92" stroke="url(%23lisoFios)" stroke-width="4.5" stroke-linecap="round"/><path d="M54 36 L57 42 L63 45 L57 48 L54 54 L51 48 L45 45 L51 42 Z" fill="%2338BDF8"/><path d="M72 68 L74 72 L78 74 L74 76 L72 80 L70 76 L66 74 L70 72 Z" fill="%2338BDF8"/></svg>',
  'hair-ondulado.svg': 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" fill="none"><defs><linearGradient id="onduladoBg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="%23D1FAE5"/><stop offset="1" stop-color="%23A7F3D0"/></linearGradient><linearGradient id="onduladoFios" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="%23059669"/><stop offset="1" stop-color="%23047857"/></linearGradient></defs><rect width="120" height="120" rx="30" fill="url(%23onduladoBg)"/><circle cx="60" cy="60" r="46" fill="%23FFFFFF" fill-opacity="0.85"/><path d="M42 26 Q54 42 42 58 T42 94" stroke="url(%23onduladoFios)" stroke-width="4.5" stroke-linecap="round"/><path d="M54 22 Q66 40 54 60 T54 98" stroke="url(%23onduladoFios)" stroke-width="5" stroke-linecap="round"/><path d="M66 22 Q78 40 66 60 T66 98" stroke="url(%23onduladoFios)" stroke-width="5" stroke-linecap="round"/><path d="M78 26 Q90 42 78 58 T78 94" stroke="url(%23onduladoFios)" stroke-width="4.5" stroke-linecap="round"/><circle cx="62" cy="40" r="3" fill="%236EE7B7"/><circle cx="74" cy="78" r="2.5" fill="%236EE7B7"/></svg>',
  'hair-cacheado.svg': 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" fill="none"><defs><linearGradient id="cacheadoBg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="%23FFE4E6"/><stop offset="1" stop-color="%23FECDD3"/></linearGradient><linearGradient id="cacheadoFios" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="%23F43F5E"/><stop offset="1" stop-color="%23BE123C"/></linearGradient></defs><rect width="120" height="120" rx="30" fill="url(%23cacheadoBg)"/><circle cx="60" cy="60" r="46" fill="%23FFFFFF" fill-opacity="0.85"/><path d="M42 24 C58 32 58 46 42 54 C58 62 58 76 42 84 C54 90 52 98 42 100" stroke="url(%23cacheadoFios)" stroke-width="4.5" stroke-linecap="round"/><path d="M60 20 C76 30 76 44 60 54 C76 64 76 78 60 88 C72 94 70 100 60 102" stroke="url(%23cacheadoFios)" stroke-width="5" stroke-linecap="round"/><path d="M78 24 C94 32 94 46 78 54 C94 62 94 76 78 84 C90 90 88 98 78 100" stroke="url(%23cacheadoFios)" stroke-width="4.5" stroke-linecap="round"/><circle cx="52" cy="38" r="2.5" fill="%23FDA4AF"/><circle cx="70" cy="70" r="3" fill="%23FDA4AF"/></svg>',
  'hair-crespo.svg': 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" fill="none"><defs><linearGradient id="crespoBg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="%23FEF3C7"/><stop offset="1" stop-color="%23FDE68A"/></linearGradient><linearGradient id="crespoFios" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="%23D97706"/><stop offset="1" stop-color="%23B45309"/></linearGradient></defs><rect width="120" height="120" rx="30" fill="url(%23crespoBg)"/><circle cx="60" cy="60" r="46" fill="%23FFFFFF" fill-opacity="0.85"/><path d="M38 24 Q50 30 38 36 Q50 42 38 48 Q50 54 38 60 Q50 66 38 72 Q50 78 38 84 Q50 90 38 96" stroke="url(%23crespoFios)" stroke-width="4.5" stroke-linecap="round"/><path d="M52 20 Q64 26 52 32 Q64 38 52 44 Q64 50 52 56 Q64 62 52 68 Q64 74 52 80 Q64 86 52 92 Q64 98 52 102" stroke="url(%23crespoFios)" stroke-width="4.5" stroke-linecap="round"/><path d="M68 20 Q80 26 68 32 Q80 38 68 44 Q80 50 68 56 Q80 62 68 68 Q80 74 68 80 Q80 86 68 92 Q80 98 68 102" stroke="url(%23crespoFios)" stroke-width="4.5" stroke-linecap="round"/><path d="M82 24 Q94 30 82 36 Q94 42 82 48 Q94 54 82 60 Q94 66 82 72 Q94 78 82 84 Q94 90 82 96" stroke="url(%23crespoFios)" stroke-width="4.5" stroke-linecap="round"/></svg>',
  'hair-quimica.svg': 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" fill="none"><defs><linearGradient id="quimicaBg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="%23EDE9FE"/><stop offset="1" stop-color="%23DDD6FE"/></linearGradient><linearGradient id="quimicaFios" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse"><stop stop-color="%237C3AED"/><stop offset="1" stop-color="%235B21B6"/></linearGradient></defs><rect width="120" height="120" rx="30" fill="url(%23quimicaBg)"/><circle cx="60" cy="60" r="46" fill="%23FFFFFF" fill-opacity="0.85"/><line x1="42" y1="24" x2="42" y2="96" stroke="url(%23quimicaFios)" stroke-width="4.5" stroke-linecap="round"/><line x1="60" y1="20" x2="60" y2="100" stroke="url(%23quimicaFios)" stroke-width="5" stroke-linecap="round"/><line x1="78" y1="24" x2="78" y2="96" stroke="url(%23quimicaFios)" stroke-width="4.5" stroke-linecap="round"/><line x1="34" y1="42" x2="86" y2="42" stroke="%23A78BFA" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/><line x1="34" y1="64" x2="86" y2="64" stroke="%23A78BFA" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/><line x1="34" y1="84" x2="86" y2="84" stroke="%23A78BFA" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/><path d="M60 28 L64 34 L70 36 L64 38 L60 44 L56 38 L50 36 L56 34 Z" fill="%23F43F5E"/></svg>',
  'logo.svg': 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none"><defs><linearGradient id="logoGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse"><stop stop-color="%237C3AED"/><stop offset="1" stop-color="%23F43F5E"/></linearGradient></defs><rect width="64" height="64" rx="20" fill="url(%23logoGrad)"/><path d="M32 12 C24 24 18 32 18 40 A14 14 0 0 0 46 40 C46 32 40 24 32 12 Z" fill="%23FFFFFF" fill-opacity="0.95"/><path d="M32 24 C36 28 38 32 38 36 C38 41 34 44 32 45" stroke="%237C3AED" stroke-width="3" stroke-linecap="round"/><circle cx="28" cy="38" r="3" fill="%23F43F5E"/></svg>',
  'hero-hair.svg': 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360" width="400" height="360" fill="none"><defs><linearGradient id="heroGradBg" x1="0" y1="0" x2="400" y2="360" gradientUnits="userSpaceOnUse"><stop stop-color="%23F5F3FF"/><stop offset="1" stop-color="%23FFF1F2"/></linearGradient><linearGradient id="hairGrad" x1="50" y1="40" x2="350" y2="320" gradientUnits="userSpaceOnUse"><stop stop-color="%237C3AED"/><stop offset="0.5" stop-color="%23F43F5E"/><stop offset="1" stop-color="%23F59E0B"/></linearGradient></defs><rect width="400" height="360" rx="32" fill="url(%23heroGradBg)"/><circle cx="200" cy="180" r="120" fill="%23FFFFFF" fill-opacity="0.9"/><path d="M120 70 L120 280" stroke="%230284C7" stroke-width="5" stroke-linecap="round"/><path d="M130 90 L130 260" stroke="%2338BDF8" stroke-width="3.5" stroke-linecap="round"/><path d="M165 70 Q190 120 165 170 T165 280" stroke="%23059669" stroke-width="5" stroke-linecap="round"/><path d="M175 90 Q200 135 175 180 T175 260" stroke="%236EE7B7" stroke-width="3.5" stroke-linecap="round"/><path d="M225 70 C260 95 260 135 225 160 C260 185 260 225 225 250 C260 275 250 285 225 285" stroke="%23F43F5E" stroke-width="5" stroke-linecap="round"/><path d="M275 70 Q292 84 275 98 Q292 112 275 126 Q292 140 275 154 Q292 168 275 182 Q292 196 275 210 Q292 224 275 238 Q292 252 275 266 Q292 280 275 280" stroke="%23D97706" stroke-width="5" stroke-linecap="round"/><g transform="translate(170, 130)"><circle cx="30" cy="30" r="34" fill="%237C3AED" fill-opacity="0.12"/><path d="M30 6 C20 18 14 28 14 38 A16 16 0 0 0 46 38 C46 28 40 18 30 6 Z" fill="url(%23hairGrad)"/><circle cx="25" cy="35" r="4" fill="%23FFFFFF" fill-opacity="0.85"/></g><path d="M85 110 L90 118 L98 122 L90 126 L85 134 L80 126 L72 122 L80 118 Z" fill="%23FBBF24"/><path d="M315 95 L319 101 L325 104 L319 107 L315 113 L311 107 L305 104 L311 101 Z" fill="%23A78BFA"/><path d="M300 240 L303 245 L308 247 L303 249 L300 254 L297 249 L292 247 L297 245 Z" fill="%23FB7185"/></svg>'
};

function initImageFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      const src = this.getAttribute('src') || '';
      for (const [filename, fallbackData] of Object.entries(FALLBACK_SVGS)) {
        if (src.endsWith(filename)) {
          this.src = fallbackData;
          break;
        }
      }
    });
  });
}

/* ==========================================================================
   1. Dados dos Tipos de Cabelo (8 Temas Educativos Obrigatórios)
   ========================================================================== */
const HAIR_TYPES_DATA = {
  liso: {
    title: 'Cabelo Liso',
    subtitle: 'Fios alinhados, com tendência à oleosidade na raiz e facilidade de reflexo de brilho',
    iconColor: '#0284c7',
    sections: {
      caracteristicas: 'Fios com estrutura retilínea natural. A oleosidade produzida no couro cabeludo escorre com facilidade até as pontas, mantendo o cabelo brilhoso, porém frequentemente com raiz oleosa e pontas que podem ressecar se expostas a muito calor.',
      hidratacao: 'Foque em hidratações leves com fórmulas aquosas (aloe vera, D-pantenol, extratos botânicos). Evite máscaras muito pesadas ou com alta concentração de manteigas na raiz para não pesar os fios.',
      nutricao: 'Faça nutrição com óleos levíssimos, como óleo de argan ou semente de uva, aplicando somente do meio para as pontas. Uma vez a cada 15 dias costuma ser suficiente para fios lisos naturais.',
      reconstrucao: 'Aplique queratina vegetal ou aminoácidos a cada 20 ou 30 dias se o cabelo for natural, ou a cada 15 dias se usar frequentemente secador e chapinha, para evitar que os fios fiquem rígidos.',
      finalizacao: 'Prefira leave-ins em spray ou fluidos bem leves. Evite cremes densos que possam deixar o cabelo com aspecto pesado ou sem movimento.',
      diaADia: 'Evite passar as mãos nos fios repetidamente ao longo do dia para não transferir oleosidade da pele. Ao pentear, use escovas com cerdas macias ou pentes de dentes largos.',
      lavagem: 'Lave com água morna a fria para selar as cutículas. Aplique o shampoo massageando suavemente apenas o couro cabeludo; a espuma que desce pelo comprimento é suficiente para limpar os fios.',
      protecao: 'Uso indispensável de protetor térmico antes de qualquer ferramenta de calor (secador ou chapinha) e proteção solar capilar em dias de praia ou piscina.'
    }
  },
  ondulado: {
    title: 'Cabelo Ondulado',
    subtitle: 'Curvatura em formato de "S", combinando raiz mais lisa com comprimento ondulado',
    iconColor: '#059669',
    sections: {
      caracteristicas: 'Possui padrão em formato de ondas (tipo 2A, 2B, 2C). É um cabelo versátil, mas suscetível a frizz e que pode perder a definição facilmente dependendo da umidade do ar e dos produtos utilizados.',
      hidratacao: 'A hidratação semanal é o pilar do cabelo ondulado. Máscaras com glicerina, babosa e ácido hialurônico ajudam a reter água sem anular o movimento natural.',
      nutricao: 'Nutrição intercalada com óleos moderados (jojoba, abacate ou coco em pequenas doses) mantém a elasticidade dos fios e sela a cutícula contra o arrepiado do frizz.',
      reconstrucao: 'A reconstrução mensal fortalece a fibra capilar, prevenindo quebras no momento do desembaraço e mantendo a integridade da curvatura.',
      finalizacao: 'A técnica de "amassar" os fios de baixo para cima com uma toalha de microfibra ou camiseta de algodão ativa as ondas sem pesar. Use gelatinas líquidas ou mousses modeladores.',
      diaADia: 'Para o day after (dias seguintes à lavagem), use um borrifador com água e umas gotas de leave-in para reativar as ondas sem precisar lavar tudo de novo.',
      lavagem: 'Prefira shampoos suaves ou com sulfato brando para preservar a hidratação natural do comprimento ondulado sem ressecar as pontas.',
      protecao: 'Proteja os fios do calor excessivo do difusor e do secador usando protetor térmico específico com ação anti-frizz.'
    }
  },
  cacheado: {
    title: 'Cabelo Cacheado',
    subtitle: 'Espirais bem definidas que necessitam de reposição frequente de umidade e óleos',
    iconColor: '#f43f5e',
    sections: {
      caracteristicas: 'Curvatura em espiral (tipos 3A, 3B, 3C). Devido ao formato sinuoso, a oleosidade natural do couro cabeludo tem grande dificuldade para percorrer todo o comprimento até as pontas, tornando os fios naturalmente mais secos.',
      hidratacao: 'Indispensável ao menos 1 a 2 vezes por semana com ativos altamente umectantes (extrato de algas, pantenol, mel vegetal) para devolver emoliência e elasticidade.',
      nutricao: 'Etapa queridinha dos cachos: banhos de óleos vegetais puros (umectação com óleo de coco, rícino, oliva) e máscaras com manteiga de karité ou murumuru para combater a porosidade.',
      reconstrucao: 'Reconstrução a cada 15 ou 20 dias com colágeno e queratina para reestruturar as pontes de hidrogênio e manter os cachos firmes, com memória e resistentes à tração.',
      finalizacao: 'Aposte em técnicas consagradas como fitagem, rake and shake ou dedoliss com cremes de pentear consistentes combinados com gelatina capilar para máxima definição e durabilidade.',
      diaADia: 'Durma com touca ou fronha de cetim para evitar o atrito que desfaz os cachos e gera frizz durante a noite. Penteie apenas quando os fios estiverem molhados e condicionados.',
      lavagem: 'Intercale lavagens convencionais com técnicas de co-wash ou shampoos hidratantes com fórmula suave (low poo) para não desidratar os cachos.',
      protecao: 'Use difusor com temperatura média e sempre com protetor térmico protetor de cachos. No verão, use filtros UV capilares para evitar oxidação da cor e ressecamento.'
    }
  },
  crespo: {
    title: 'Cabelo Crespo',
    subtitle: 'Padrão em Z ou espirais muito unidas; fio nobre, volumoso e que requer carinho especial',
    iconColor: '#d97706',
    sections: {
      caracteristicas: 'Possui padrão bem fechado (tipos 4A, 4B, 4C). É o tipo de cabelo mais frágil e delicado estruturalmente, com diâmetro de fio fino e alta tendência ao ressecamento e ao fator encolhimento, esbanjando muito volume e versatilidade.',
      hidratacao: 'Deve ser profunda e regular, associada a agentes condicionantes ricos para repor a umidade que evapora facilmente das cutículas mais abertas.',
      nutricao: 'A nutrição é fundamental na rotina do crespo: umectação com manteigas vegetais (karité, manga, cacau) e óleos densos para criar uma barreira protetora lipídica duradoura.',
      reconstrucao: 'Reconstrução a cada 15 a 30 dias para reforçar a haste capilar nas áreas de menor espessura onde a quebra mecânica costuma ocorrer.',
      finalizacao: 'Método LOC (Líquido, Óleo, Creme) ou COG (Creme, Óleo, Gelatina). A selagem em camadas garante retenção de umidade prolongada por vários dias seguidos.',
      diaADia: 'Jamais desembarace o cabelo crespo a seco; faça sempre com os fios úmidos e com abundância de creme ou condicionador, utilizando os dedos ou pentes de dentes muito largos.',
      lavagem: 'Antes de lavar, o pré-shampoo (óleo vegetal ou condicionador) protege os fios da ação detergente do shampoo. Lave o couro com a ponta dos dedos delicadamente.',
      protecao: 'O uso de touca ou turbante de cetim é essencial para acordar com os fios íntegros. Ao usar tranças ou penteados protetores, hidrate o couro cabeludo regularmente.'
    }
  },
  quimica: {
    title: 'Cabelo Pós-Progressiva & Alisamento',
    subtitle: 'Fios submetidos a modificações térmicas ou químicas que necessitam de restauração contínua',
    iconColor: '#7c3aed',
    sections: {
      caracteristicas: 'Fios que tiveram suas pontes de dissulfeto rompidas e remodeladas para atingir o formato liso. Frequentemente sofrem com afinamento da fibra, pontas espigadas, perda de elasticidade e maior rigidez no córtex.',
      hidratacao: 'Essencial para manter a maleabilidade. Químicas tendem a enrijecer a haste; agentes hidrofílicos garantem que o fio continue com balanço natural e toque sedoso.',
      nutricao: 'Fundamental para repor os lipídios perdidos durante a queima ou ação ácida da química. Óleos vegetais nobres selam a cutícula e restauram a camada protetora natural.',
      reconstrucao: 'Etapa de ouro: reposição periódica de massa (aminoácidos, creatina, queratina biomimética) para preencher as lacunas abertas pela química e evitar corte químico ou quebra.',
      finalizacao: 'Leave-in selante de pontas e reparador com silicones termoativos ou óleos nobres para uniformizar a textura e proteger contra pontas duplas.',
      diaADia: 'Evite prender o cabelo com elásticos finos ou apertados que possam marcar ou quebrar a haste fragilizada. Prefira elásticos de cetim (scrunchies).',
      lavagem: 'Utilize shampoos específicos para cabelos pós-química, com pH levemente ácido (entre 4.5 e 5.5) e livres de sulfatos agressivos que possam remover o efeito do alisamento precocemente.',
      protecao: 'Proteção térmica estrita: nunca encoste prancha ou secador muito quente diretamente no fio desprotegido, pois o calor excessivo em fios quimicamente alterados provoca quebra imediata.'
    }
  }
};

/* ==========================================================================
   2. Modal dos Tipos de Cabelo
   ========================================================================== */
function initHairTypeModal() {
  const modalOverlay = document.getElementById('hairTypeModal');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const btnFooterClose = document.getElementById('btnFooterClose');
  const cardButtons = document.querySelectorAll('[data-open-modal]');

  if (!modalOverlay) return;

  function openModal(typeKey) {
    const data = HAIR_TYPES_DATA[typeKey];
    if (!data) return;

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalSubtitle').textContent = data.subtitle;

    const bodyContainer = document.getElementById('modalBodyContent');
    bodyContainer.innerHTML = `
      <div class="modal-info-block">
        <div class="modal-info-title">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          Características dos fios
        </div>
        <p class="modal-info-desc">${data.sections.caracteristicas}</p>
      </div>

      <div class="modal-info-block">
        <div class="modal-info-title">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>
          Hidratação
        </div>
        <p class="modal-info-desc">${data.sections.hidratacao}</p>
      </div>

      <div class="modal-info-block">
        <div class="modal-info-title">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          Nutrição
        </div>
        <p class="modal-info-desc">${data.sections.nutricao}</p>
      </div>

      <div class="modal-info-block">
        <div class="modal-info-title">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          Reconstrução
        </div>
        <p class="modal-info-desc">${data.sections.reconstrucao}</p>
      </div>

      <div class="modal-info-block">
        <div class="modal-info-title">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
          Finalização
        </div>
        <p class="modal-info-desc">${data.sections.finalizacao}</p>
      </div>

      <div class="modal-info-block">
        <div class="modal-info-title">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 9v3l1.5 1.5"/></svg>
          Cuidados no dia a dia
        </div>
        <p class="modal-info-desc">${data.sections.diaADia}</p>
      </div>

      <div class="modal-info-block">
        <div class="modal-info-title">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 14.899A7 7 0 1115.71 8h1.79a4.5 4.5 0 012.5 8.242M8 19v1m4-1v2m4-2v1"/></svg>
          Cuidados ao lavar
        </div>
        <p class="modal-info-desc">${data.sections.lavagem}</p>
      </div>

      <div class="modal-info-block">
        <div class="modal-info-title">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Proteção dos fios
        </div>
        <p class="modal-info-desc">${data.sections.protecao}</p>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  cardButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const typeKey = btn.getAttribute('data-open-modal');
      openModal(typeKey);
    });
  });

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
  if (btnFooterClose) btnFooterClose.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   3. Quiz Capilar Interativo (Analisar Meu Cabelo)
   ========================================================================== */
function initHairQuiz() {
  const quizForm = document.getElementById('hairQuizForm');
  const optionCards = document.querySelectorAll('.option-card');
  const btnAnalyze = document.getElementById('btnAnalyzeHair');
  const quizAlert = document.getElementById('quizAlert');
  const resultContainer = document.getElementById('analysisResultContainer');
  const btnResetQuiz = document.getElementById('btnResetQuiz');

  if (!btnAnalyze || !quizForm) return;

  // Seleção acessível e amigável ao toque
  optionCards.forEach(card => {
    card.addEventListener('click', () => {
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        const groupName = radio.name;
        document.querySelectorAll(`input[name="${groupName}"]`).forEach(input => {
          const parent = input.closest('.option-card');
          if (parent) parent.classList.remove('selected');
        });
        card.classList.add('selected');
        quizAlert.style.display = 'none';
      }
    });

    // Suporte a teclado (Enter e Espaço)
    card.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        card.click();
      }
    });
  });

  btnAnalyze.addEventListener('click', (e) => {
    e.preventDefault();

    const selectedType = document.querySelector('input[name="hairType"]:checked');
    const selectedState = document.querySelector('input[name="hairState"]:checked');
    const selectedGoal = document.querySelector('input[name="hairGoal"]:checked');

    if (!selectedType || !selectedState || !selectedGoal) {
      quizAlert.style.display = 'flex';
      quizAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }

    quizAlert.style.display = 'none';

    // Gerar resultado na tela sem recarregar
    generateCustomizedResult(selectedType.value, selectedState.value, selectedGoal.value);
  });

  if (btnResetQuiz) {
    btnResetQuiz.addEventListener('click', () => {
      quizForm.reset();
      optionCards.forEach(c => c.classList.remove('selected'));
      resultContainer.style.display = 'none';

      const quizSection = document.getElementById('analisar');
      if (quizSection) {
        quizSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

function generateCustomizedResult(hairType, hairState, hairGoal) {
  const resultContainer = document.getElementById('analysisResultContainer');
  const tagType = document.getElementById('resProfileType');
  const tagState = document.getElementById('resProfileState');
  const tagGoal = document.getElementById('resProfileGoal');
  const progressiveAlert = document.getElementById('progressiveNoticeBlock');
  const suggestionsContainer = document.getElementById('suggestionsList');

  // Atualizar resumo do perfil
  tagType.textContent = hairType;
  tagState.textContent = hairState;
  tagGoal.textContent = hairGoal;

  // Destaque para processos químicos
  const isChemical = hairType.toLowerCase().includes('progressiva') || hairType.toLowerCase().includes('alisamento');
  if (isChemical) {
    progressiveAlert.style.display = 'block';
  } else {
    progressiveAlert.style.display = 'none';
  }

  // Obter sugestões dinâmicas
  const suggestions = calculateHairRoutine(hairType, hairState, hairGoal);

  suggestionsContainer.innerHTML = suggestions.map((item, index) => `
    <div class="suggestion-item">
      <div class="suggestion-num">${index + 1}</div>
      <div class="suggestion-content">
        <strong>${item.title}</strong>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');

  resultContainer.style.display = 'block';
  resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function calculateHairRoutine(type, state, goal) {
  const list = [];
  const lowerType = type.toLowerCase();
  const lowerState = state.toLowerCase();
  const lowerGoal = goal.toLowerCase();

  // Sugestão 1: Cronograma focado na condição e objetivo
  if (lowerState.includes('ressecado') || lowerGoal.includes('hidratação')) {
    list.push({
      title: 'Etapa Principal: Hidratação Profunda & Reposição Hídrica',
      description: `Para aliviar o aspecto ${state.toLowerCase()}, dedique 2 sessões semanais à hidratação com ativos como pantenol, aloe vera ou glicerina vegetal. Seus fios recuperarão maleabilidade, balanço e toque sedoso.`
    });
  } else if (lowerState.includes('quebradiço') || lowerGoal.includes('reconstrução')) {
    list.push({
      title: 'Etapa Principal: Reconstrução com Aminoácidos e Proteínas',
      description: `Como os fios apresentam aspecto ${state.toLowerCase()}, inclua uma máscara de reconstrução com queratina hidrolisada ou creatina a cada 15 dias para restaurar a integridade das fibras e cessar a fragilidade.`
    });
  } else if (lowerState.includes('frizz') || lowerGoal.includes('nutrição') || lowerGoal.includes('controle de frizz')) {
    list.push({
      title: 'Etapa Principal: Nutrição com Óleos Vegetais e Lipídios',
      description: `Para controlar o frizz e devolver alinhamento, adote a nutrição regular com óleos nutritivos (argan, macadâmia ou jojoba). Eles criam um filme protetor que impede que os fios arrepiem com a umidade do ar.`
    });
  } else if (lowerState.includes('oleoso')) {
    list.push({
      title: 'Etapa de Equilíbrio: Purificação do Couro e Hidratação Leve',
      description: `Alterne um shampoo refrescante de limpeza suave com uma máscara ultra-leve com extratos de chá verde ou hortelã, aplicando estritamente do meio para as pontas para não estimular a oleosidade do couro.`
    });
  } else if (lowerGoal.includes('definição') || lowerState.includes('sem definição')) {
    list.push({
      title: 'Foco em Definição e Memória dos Fios',
      description: `Invista em hidratações ricas em colágeno vegetal e babosa, finalizando com a técnica de fitagem úmida para estimular a memória de curvatura do seu cabelo sem pesar.`
    });
  } else {
    list.push({
      title: 'Manutenção Preventiva e Brilho Duradouro',
      description: `Como seu cabelo está equilibrado, mantenha um cronograma preventivo: 1 hidratação por semana, 1 nutrição quinzenal e 1 reconstrução mensal para preservar a vitalidade e luminosidade natural.`
    });
  }

  // Sugestão 2: Cuidado Específico pelo Tipo de Cabelo Selecionado
  if (lowerType.includes('liso')) {
    list.push({
      title: 'Dica Especial para Cabelo Liso',
      description: 'Para cabelos lisos, lave sempre com água morna para fria e use protetor térmico fluido antes de secar. Evite colocar condicionador ou máscaras na raiz para manter os fios soltos e com movimento ao longo de todo o dia.'
    });
  } else if (lowerType.includes('ondulado')) {
    list.push({
      title: 'Dica Especial para Cabelo Ondulado',
      description: 'Para cabelos ondulados, utilize produtos com textura leve (como leave-ins fluidos ou mousses) e amasse os fios de baixo para cima com uma camiseta de algodão. Isso estimula a formação de ondas sem acumular resíduos.'
    });
  } else if (lowerType.includes('cacheado')) {
    list.push({
      title: 'Dica Especial para Cabelo Cacheado',
      description: 'Para cabelos cacheados, realize a finalização em mechas com os fios bem molhados (técnica de fitagem) e adote uma fronha ou touca de cetim na hora de dormir para evitar o atrito que desmancha os cachos e cria frizz noturno.'
    });
  } else if (lowerType.includes('crespo')) {
    list.push({
      title: 'Dica Especial para Cabelo Crespo',
      description: 'Para cabelos crespos, nunca desembarace a seco: utilize sempre um creme para pentear emoliente nos fios úmidos e use os dedos ou pente de dentes largos. A umectação com manteigas vegetais é o melhor aliado contra o ressecamento.'
    });
  } else if (lowerType.includes('progressiva') || lowerType.includes('alisamento')) {
    list.push({
      title: 'Atenção Rigorosa pós-química',
      description: 'Para cabelos com progressiva ou alisamento químico, as cutículas foram seladas artificialmente. Use produtos sem sulfatos agressivos, mantenha o pH equilibrado e nunca dispense um leave-in com proteção térmica antes do secador.'
    });
  }

  // Sugestão 3: Higienização e Finalização Personalizada ao Objetivo
  if (lowerGoal.includes('brilho')) {
    list.push({
      title: 'Finalização para Alto Brilho e Selamento de Cutículas',
      description: 'Finalize o enxágue com água fresca para ajudar no alinhamento das cutículas. Aplique 2 a 3 gotinhas de óleo reparador nas pontas após secar para um reflexo espelhado imediato.'
    });
  } else if (lowerGoal.includes('frizz')) {
    list.push({
      title: 'Combate ao Frizz e Proteção contra Umidade',
      description: 'Troque a toalha de banho tradicional por uma de microfibra ou tecido 100% algodão, evitando esfregar a fibra capilar. Use um sérum antifrizz com barreira umectante.'
    });
  } else if (lowerGoal.includes('definição')) {
    list.push({
      title: 'Finalização Prolongada e Durabilidade do Day After',
      description: 'Misture um pouco de gelatina modeladora com seu creme de pentear favorito. Essa combinação garante flexibilidade, cachos estruturados e ótima durabilidade por vários dias.'
    });
  } else {
    list.push({
      title: 'Dica de Ouro de Lavagem & Proteção Diária',
      description: 'Massageie o couro cabeludo exclusivamente com a polpa dos dedos, nunca com as unhas. Use sempre protetor solar capilar em dias ensolarados para blindar as proteínas do fio.'
    });
  }

  return list;
}

/* ==========================================================================
   4. Campo de Entrada Extra (Qual é a sua maior dúvida sobre seu cabelo?)
   ========================================================================== */
function initFaqTipAssistant() {
  const faqInput = document.getElementById('userFaqInput');
  const btnFaqSubmit = document.getElementById('btnFaqSubmit');
  const responseBox = document.getElementById('faqResponseBox');
  const responseContent = document.getElementById('faqResponseContent');

  if (!btnFaqSubmit || !faqInput || !responseBox) return;

  btnFaqSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const query = faqInput.value.trim();

    if (!query) {
      responseBox.className = 'faq-response-box empty';
      responseBox.style.display = 'block';
      responseContent.innerHTML = `
        <div class="faq-response-content">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          <div class="faq-response-text">
            <strong>Digite uma dúvida para receber uma dica.</strong>
            <p>Escreva sua dúvida capilar no campo acima (ex: frizz, lavagem, oleosidade, hidratação) e clique no botão!</p>
          </div>
        </div>
      `;
      return;
    }

    const specificTip = getContextualTip(query);

    responseBox.className = 'faq-response-box success';
    responseBox.style.display = 'block';
    responseContent.innerHTML = `
      <div class="faq-response-content">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <div class="faq-response-text">
          <strong>Uma dica: mantenha uma rotina de cuidados consistente e observe como seu cabelo responde aos produtos e tratamentos.</strong>
          <p>${specificTip}</p>
        </div>
      </div>
    `;
  });
}

function getContextualTip(text) {
  const lower = text.toLowerCase();

  if (lower.includes('frizz') || lower.includes('arrepio') || lower.includes('eletricidade')) {
    return 'Dica personalizada: O frizz costuma ser sinal de falta de umidade ou atrito. Troque a fronha de algodão por uma de cetim e finalize sempre com um óleo reparador de pontas leve.';
  }
  if (lower.includes('lavar') || lower.includes('lavagem') || lower.includes('quantas vezes')) {
    return 'Dica personalizada: A frequência ideal depende do couro: cabelos lisos e oleosos geralmente pedem lavagens diárias ou em dias alternados; cacheados e crespos se beneficiam de 2 a 3 lavagens semanais para não ressecar o comprimento.';
  }
  if (lower.includes('queda') || lower.includes('caindo') || lower.includes('quebra')) {
    return 'Dica personalizada: Fios que quebram com facilidade precisam de reconstrução (proteínas) e desembaraço delicado. Já se a raiz estiver caindo em excesso, consulte um dermatologista para checar sua saúde e exames de sangue.';
  }
  if (lower.includes('progressiva') || lower.includes('alisamento') || lower.includes('quimica') || lower.includes('botox')) {
    return 'Dica personalizada: Cabelos com química necessitam de reposição contínua de massa e uso obrigatório de protetor térmico em qualquer exposição ao calor, evitando que as pontas afinem ou fiquem espigadas.';
  }
  if (lower.includes('cacho') || lower.includes('onda') || lower.includes('definição')) {
    return 'Dica personalizada: Para manter a definição por mais dias, faça a finalização com o cabelo bem molhado, aplicando leave-in por mechas e amassando com tecido suave.';
  }
  if (lower.includes('oleosidade') || lower.includes('oleoso') || lower.includes('sebo')) {
    return 'Dica personalizada: Evite banhos com água muito quente, que causam o efeito rebote e aumentam a oleosidade. Aplique máscaras e condicionadores a pelo menos 3 dedos de distância da raiz.';
  }

  return 'Para sua dúvida específica, anote como o cabelo se comporta após cada máscara e ajuste o tempo de pausa conforme indicado no rótulo de cada fabricante.';
}

/* ==========================================================================
   5. Navegação Mobile Responsiva
   ========================================================================== */
function initMobileNavigation() {
  const btnToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!btnToggle || !mobileMenu) return;

  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('open');
    btnToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    btnToggle.setAttribute('aria-expanded', 'false');
  }

  btnToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && !btnToggle.contains(e.target)) {
      closeMenu();
    }
  });
}

function initSmoothScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// Exportações para testes e vinculação global
if (typeof window !== 'undefined') {
  window.HAIR_TYPES_DATA = HAIR_TYPES_DATA;
  window.calculateHairRoutine = calculateHairRoutine;
  window.getContextualTip = getContextualTip;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    HAIR_TYPES_DATA,
    calculateHairRoutine,
    getContextualTip
  };
}
