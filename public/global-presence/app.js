(() => {
  'use strict';
  const {regions, markets} = window.CW_DATA;
  const $ = id => document.getElementById(id);
  const byId = id => markets.find(m => m.id === id);
  const state = {
    lang: new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh',
    region: 'all',
    selected: 'hong-kong',
    view: 'map'
  };
  const tr = (en, zh) => state.lang === 'en' ? en : zh;
  const name = item => item[state.lang];
  const visibleMarkets = () => markets.filter(m => state.region === 'all' || m.region === state.region);
  const isVisible = m => state.region === 'all' || m.region === state.region;
  const homeHref = () => state.lang === 'en' ? '/en' : '/';
  const statusText = m => m.status === 'active'
    ? tr('Hong Kong base', '香港公司所在地')
    : m.status === 'partner'
      ? tr('Potential partner discussions', '潛在合作夥伴接洽中')
      : tr('Exploring', '拓展中');
  const statusDetail = m => m.status === 'active'
    ? tr('CloudWind AI is established in Hong Kong. Its current contracted clients and completed projects are in Hong Kong.', '雲風智能成立於香港。目前已簽約客戶及已執行項目均位於香港。')
    : m.status === 'partner'
      ? tr('Potential partner conversations may be explored here. This marker does not indicate a signed client, completed project, local office or established partnership.', '此地區有潛在合作夥伴接洽構想。節點不表示已簽約客戶、已執行項目、當地辦公室或已確立合作關係。')
      : tr('A geographic reference for possible future technology collaboration. This marker does not indicate a signed client, completed project or local office.', '此地區作為未來技術合作的地理參考。節點不表示已簽約客戶、已執行項目或當地辦公室。');
  const coords = m => `${Math.abs(m.lat).toFixed(2)}° ${m.lat >= 0 ? 'N' : 'S'} / ${Math.abs(m.lon).toFixed(2)}° ${m.lon >= 0 ? 'E' : 'W'}`;

  function applyLanguage() {
    document.documentElement.lang = state.lang === 'en' ? 'en' : 'zh-Hant';
    document.querySelectorAll('[data-en][data-zh]').forEach(el => { el.innerHTML = el.dataset[state.lang]; });
    document.querySelectorAll('[data-case-link]').forEach(el => { el.href = '/cases' + (state.lang === 'en' ? '?lang=en' : ''); });
    document.querySelectorAll('[data-site-link]').forEach(el => { el.href = homeHref() + (el.dataset.siteLink ? '#' + el.dataset.siteLink : ''); });
    $('language').classList.toggle('zh', state.lang === 'zh');
    $('language').setAttribute('aria-label', tr('Switch to Traditional Chinese', 'Switch to English'));
    $('site-menu-toggle').setAttribute('aria-label', tr('Open navigation menu', '打開導航菜單'));
    document.title = tr('Global Collaboration Map · CloudWind AI', '全球合作地圖 · CloudWind AI');
    document.querySelector('meta[name=description]').content = tr(
      'Hong Kong base and geographic references for potential technology collaboration. All other locations are exploring or potential partner discussions.',
      '以香港為公司所在地，展示未來技術合作的地理參考；其他地區均標示為拓展中或潛在合作夥伴接洽中。'
    );
    $('world-title').textContent = tr('CloudWind AI global collaboration map', 'CloudWind AI 全球合作地圖');
    $('world-desc').textContent = tr('Map centered on Hong Kong with 12 geographic points. Hong Kong is the company base; every other point is exploring or in potential partner discussions. The list provides a text alternative.', '以香港為中心、包含十二個地理節點的地圖。香港是公司所在地，其他節點均屬拓展中或潛在合作夥伴接洽中；列表提供文字替代。');
  }

  function renderFocusCards() {
    const focus = [
      {id:'hong-kong',en:'Hong Kong',zh:'香港'},
      {id:'singapore',en:'Singapore',zh:'新加坡'},
      {id:'philippines',en:'Philippines',zh:'菲律賓'}
    ];
    $('core-cards').innerHTML = focus.map(item => {
      const m = byId(item.id);
      return `<button class="core-card" data-focus="${m.id}" aria-label="${tr('View ', '查看')}${name(item)}"><span class="core-card-label"><span class="core-diamond">${m.status === 'active' ? '◆' : '○'}</span>${name(item)}</span><small>${statusText(m)}</small><span class="core-arrow">↗</span></button>`;
    }).join('');
  }

  function renderControls() {
    $('region').innerHTML = regions.map(r => `<option value="${r.id}" ${r.id === state.region ? 'selected' : ''}>${name(r)}</option>`).join('');
    $('region').setAttribute('aria-label', tr('Filter by region', '按地區篩選'));
    $('match-count').textContent = tr(`${visibleMarkets().length} of ${markets.length} locations`, `${visibleMarkets().length} / ${markets.length} 個節點`);
    $('view-map').classList.toggle('selected', state.view === 'map');
    $('view-list').classList.toggle('selected', state.view === 'list');
    $('view-map').setAttribute('aria-pressed', String(state.view === 'map'));
    $('view-list').setAttribute('aria-pressed', String(state.view === 'list'));
    $('market-list').hidden = state.view !== 'list';
    document.querySelector('.map-layout').classList.toggle('list-mode', state.view === 'list');
  }

  function renderDetail() {
    const m = byId(state.selected);
    if (!m || !isVisible(m)) {
      $('location-detail').innerHTML = `<div class="empty-detail"><p>${tr('Select a location to view its status.', '選擇地區查看狀態。')}</p></div>`;
      return;
    }
    const region = regions.find(r => r.id === m.region);
    $('location-detail').innerHTML = `
      <div class="detail-top"><span class="detail-region">${name(region)}</span><span class="detail-order">${String(markets.indexOf(m)+1).padStart(2,'0')} / ${markets.length}</span></div>
      <div class="detail-location-code">${m.status === 'active' ? tr('COMPANY BASE','公司所在地') : tr('POTENTIAL LOCATION','潛在合作地區')}</div>
      <h3 id="detail-title">${name(m)}</h3>
      <div class="detail-coordinate">${state.lang === 'en' ? m.city : m.city_zh} · ${coords(m)}</div>
      <div class="detail-badges"><span class="badge ${m.status === 'active' ? 'core-badge' : ''}">${m.status === 'active' ? '◆' : '○'} ${statusText(m)}</span></div>
      <div class="detail-label">${tr('LOCATION STATUS', '地區狀態')}</div>
      <p class="detail-description">${statusDetail(m)}</p>
      <div class="detail-bottom"><a class="detail-contact" href="${homeHref()}#contact"><span>${tr('Discuss a technology project','討論技術項目')}</span><span>↗</span></a></div>`;
  }

  function renderList() {
    $('market-list').innerHTML = visibleMarkets().map(m => `<button class="list-location ${state.selected === m.id ? 'selected' : ''}" data-location="${m.id}" aria-pressed="${state.selected === m.id}"><strong><span class="list-flag">${m.status === 'active' ? '◆' : '○'}</span>${name(m)}</strong><span class="list-industries">${state.lang === 'en' ? m.city : m.city_zh}</span><small>${statusText(m)}</small></button>`).join('');
  }

  function renderDirectory() {
    $('directory-grid').innerHTML = markets.map(m => `<div class="directory-location"><button data-directory="${m.id}"><strong>${m.status === 'active' ? '◆ ' : '○ '}${name(m)}</strong></button><br><small>${statusText(m)}</small></div>`).join('');
  }

  const countries = topojson.feature(window.CW_WORLD, window.CW_WORLD.objects.countries).features.filter(f => f.id !== '010');
  const center = byId('hong-kong');
  let resizeTimer;
  function drawMap() {
    if (state.view !== 'map') return;
    const element = $('world-map');
    const width = element.clientWidth, height = element.clientHeight;
    if (!width || !height) return;
    const mobile = width < 470;
    const svg = d3.select(element).attr('viewBox', `0 0 ${width} ${height}`);
    svg.selectAll('g,defs').remove();
    const projection = d3.geoNaturalEarth1().rotate([-center.lon,0]).center([0,center.lat])
      .fitExtent([[14,50],[width-14,height-40]], {type:'Sphere'}).translate([width/2,height/2]);
    const path = d3.geoPath(projection);
    const defs = svg.append('defs');
    defs.append('clipPath').attr('id','land-clip').append('path')
      .attr('d', path({type:'FeatureCollection',features:countries}));
    const map = svg.append('g');
    map.append('path').datum(d3.geoGraticule10()).attr('d',path).attr('class','graticule');
    map.selectAll('.land').data(countries).join('path').attr('d',path).attr('class','land').attr('aria-hidden','true');
    const dots = map.append('g').attr('clip-path','url(#land-clip)').attr('aria-hidden','true');
    let dotPath = '';
    for (let x=6;x<width;x+=5) for (let y=8;y<height;y+=5) dotPath += `M${x},${y}h.6`;
    dots.append('path').attr('d',dotPath).attr('stroke','#7da2b7').attr('stroke-width',1.2).attr('opacity',.17);
    const oceans = [{en:'INDIAN OCEAN',zh:'印度洋',coords:[75,-25]},{en:'PACIFIC OCEAN',zh:'太平洋',coords:[-143,3]}];
    map.selectAll('.ocean-label').data(oceans).join('text').attr('class','ocean-label').attr('text-anchor','middle')
      .attr('x',d=>projection(d.coords)[0]).attr('y',d=>projection(d.coords)[1]).text(name);
    const centerGuide = map.append('g').attr('class','map-center-guide').attr('aria-hidden','true')
      .attr('transform',`translate(${projection([center.lon,center.lat])})`);
    centerGuide.append('circle').attr('r',24);
    centerGuide.append('path').attr('d','M-32,0h7M25,0h7M0,-32v7M0,25v7');
    const nodes = map.append('g').selectAll('g').data(markets).join('g')
      .attr('class',m=>`node ${m.status === 'active' ? 'core' : m.status === 'partner' ? 'partner' : 'exploring'} ${state.selected === m.id ? 'selected' : ''} ${isVisible(m) ? '' : 'hidden-node'}`)
      .attr('transform',m=>`translate(${projection([m.lon,m.lat]).join(',')})`)
      .attr('data-map-location',m=>m.id).attr('role','button').attr('tabindex',m=>isVisible(m)?0:-1)
      .attr('aria-label',m=>`${name(m)} · ${statusText(m)}`).attr('aria-pressed',m=>state.selected===m.id)
      .on('click',(event,m)=>selectLocation(m.id))
      .on('keydown',(event,m)=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();selectLocation(m.id);}});
    nodes.append('circle').attr('class','node-hit').attr('r',mobile?14:13);
    nodes.filter(m=>m.status==='active').append('circle').attr('class','node-halo').attr('r',m=>state.selected===m.id?19:12);
    nodes.append('circle').attr('class','node-ring').attr('r',m=>m.status==='active'?5:4);
    nodes.append('circle').attr('class','node-center').attr('r',1.4);
    const shownLabels = mobile ? ['hong-kong','philippines','japan','dubai','tonga','suriname','png']
      : markets.map(m=>m.id);
    const labelNodes = nodes.filter(m=>shownLabels.includes(m.id));
    const offset = m => {
      if (mobile) return {'hong-kong':[-18,-9],philippines:[6,20],japan:[13,-23],dubai:[-18,-25],tonga:[10,20],suriname:[12,22],png:[28,6]}[m.id];
      const factor=Math.min(1,width/850);
      return [m.label[0]*factor,m.label[1]*factor];
    };
    labelNodes.append('path').attr('class','label-line').attr('d',m=>{const [x,y]=offset(m);return `M0,0L${x*.6},${y}H${x}`;});
    labelNodes.append('text').attr('class','node-label')
      .attr('x',m=>offset(m)[0]+(offset(m)[0]<0?-3:3)).attr('y',m=>offset(m)[1]+3)
      .attr('text-anchor',m=>offset(m)[0]<0?'end':'start')
      .style('font-size',mobile?'8px':width<700?'9px':'11px')
      .text(m=>mobile&&m.id==='png'?tr('Papua New Guinea','巴新'):name(m));
  }

  function selectLocation(id) {
    const m=byId(id);
    if (!m || !isVisible(m)) return;
    state.selected=id;
    renderDetail();renderList();drawMap();
    if (innerWidth<801) $('location-detail').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});
  }
  function render() {
    applyLanguage();renderFocusCards();renderControls();renderDetail();renderList();renderDirectory();drawMap();
  }
  document.addEventListener('click',event=>{
    const focus=event.target.closest('[data-focus]');
    const loc=event.target.closest('[data-location]');
    const directory=event.target.closest('[data-directory]');
    if (focus) {
      state.region='all';
      state.selected=focus.dataset.focus;
      state.view='map';render();$('network').scrollIntoView({block:'start'});
    }
    if (loc) selectLocation(loc.dataset.location);
    if (directory) {
      state.region='all';state.selected=directory.dataset.directory;render();$('network').scrollIntoView({block:'start'});
    }
  });
  $('region').addEventListener('change',()=>{
    state.region=$('region').value;
    if (!isVisible(byId(state.selected))) state.selected=visibleMarkets()[0]?.id||null;
    render();
  });
  $('language').addEventListener('click',()=>{
    state.lang=state.lang==='en'?'zh':'en';
    const url=new URL(location.href);
    if(state.lang==='en')url.searchParams.set('lang','en');else url.searchParams.delete('lang');
    history.replaceState(null,'',url);render();
  });
  function closeMenu() { $('site-mobile-nav').hidden=true; $('site-menu-toggle').setAttribute('aria-expanded','false'); }
  $('site-menu-toggle').addEventListener('click',()=>{
    const open=$('site-mobile-nav').hidden;
    $('site-mobile-nav').hidden=!open;
    $('site-menu-toggle').setAttribute('aria-expanded',String(open));
  });
  $('site-mobile-nav').addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  $('reset').addEventListener('click',()=>{Object.assign(state,{region:'all',selected:'hong-kong',view:'map'});render();});
  $('view-map').addEventListener('click',()=>{state.view='map';renderControls();drawMap();});
  $('view-list').addEventListener('click',()=>{state.view='list';renderControls();renderList();});
  new ResizeObserver(()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(drawMap,80);}).observe($('map-canvas'));
  render();
})();
