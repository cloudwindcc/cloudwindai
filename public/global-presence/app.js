(() => {
  'use strict';
  const {industries, regions, markets} = window.CW_DATA;
  const $ = id => document.getElementById(id);
  const findIndustry = id => industries.find(i => i.id === id);
  const findMarket = id => markets.find(m => m.id === id);
  const mapCenter = findMarket('hong-kong');
  const state = {lang: new URLSearchParams(location.search).get('lang') === 'zh' ? 'zh' : 'en', industry:'all', region:'all', selected:mapCenter.id, view:'map'};
  const tr = (en,zh) => state.lang === 'en' ? en : zh;
  const name = item => item[state.lang];
  const shortIndustry = id => state.lang === 'en' ? findIndustry(id).short : findIndustry(id).zh;
  const fullIndustry = id => name(findIndustry(id));
  const isMatch = m => (state.region === 'all' || state.region === m.region) && (state.industry === 'all' || [...m.primary,...m.secondary].includes(state.industry));
  const visibleMarkets = () => markets.filter(isMatch);
  const statusText = m => m.status === 'exploring' ? tr('Exploring','拓展中') : tr('To be confirmed','待确认');
  const priorityText = m => m.core ? tr('Core market','核心市场') : tr('Other market','其他市场');
  const coordinates = m => `${Math.abs(m.lat).toFixed(2)}° ${m.lat >= 0 ? 'N' : 'S'} / ${Math.abs(m.lon).toFixed(2)}° ${m.lon >= 0 ? 'E' : 'W'}`;
  const homeHref = () => state.lang === 'en' ? '/en' : '/';
  const icon = id => {
    const paths = {
      finance:'<rect x="3" y="6" width="24" height="18" rx="3"/><path d="M3 12h24M8 18h5m8-2v5m-2-2h4"/>',
      building:'<path d="M3 26h24M6 26V10l9-5v21M15 12h9v14M9 13h3m-3 5h3m-3 5h3m6-7h3m-3 5h3"/>',
      chip:'<rect x="8" y="8" width="14" height="14" rx="2"/><rect x="12" y="12" width="6" height="6" rx="1"/><path d="M11 3v5m8-5v5M11 22v5m8-5v5M3 11h5m-5 8h5m14-8h5m-5 8h5"/>',
      code:'<rect x="3" y="5" width="24" height="20" rx="3"/><path d="m11 12-4 3 4 3m8-6 4 3-4 3m-3-8-2 10"/>',
      mountain:'<path d="m2 25 10-18 8 12 4-6 5 12H2Zm7-13 3 3 3-3m-1 13 6-6"/>',
      growth:'<path d="M4 4v22h23M8 21l7-8 5 3 7-10M20 6h7v7"/>'
    };
    return `<svg viewBox="0 0 30 30" aria-hidden="true">${paths[id]}</svg>`;
  };

  function applyLanguage() {
    document.documentElement.lang = state.lang === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-en][data-zh]').forEach(el => el.innerHTML = el.dataset[state.lang]);
    document.querySelectorAll('[data-case-link]').forEach(el=>el.setAttribute('href','/cases'+(state.lang==='zh'?'?lang=zh':'')));
    document.querySelectorAll('[data-site-link]').forEach(el => el.setAttribute('href',homeHref()+(el.dataset.siteLink ? '#'+el.dataset.siteLink : '')));
    $('site-menu-toggle').setAttribute('aria-label',tr('Open navigation menu','打开导航菜单'));
    $('language').classList.toggle('zh',state.lang === 'zh');
    $('language').setAttribute('aria-label',tr('Switch to Simplified Chinese','Switch to English'));
    document.querySelector('meta[name=description]').content = tr("Explore CloudWind AI's strategic global network: four core markets, six industry verticals and 15 geographic locations.",'探索 CloudWind AI 全球业务与行业布局：四大核心市场、六大行业、十五个地理节点。');
    document.title = tr('Global Presence & Industry Focus · CloudWind AI','全球业务与行业布局 · CloudWind AI');
    $('industry-filters').setAttribute('aria-label',tr('Filter by industry','按行业筛选'));
    $('region').setAttribute('aria-label',tr('Filter by region','按地区筛选'));
    $('world-title').textContent = tr('CloudWind AI global business map','CloudWind AI 全球业务地图');
    $('world-desc').textContent = tr('World map centered on Hong Kong, with 15 locations. Mainland China and Hong Kong also appear in a detailed inset. Use the location list for a text alternative.','以香港为中心的世界地图，共 15 个地理节点，中国内地及香港另设城市放大图。可切换列表查看全部节点文字信息。');
    $('china-map').setAttribute('aria-label',tr('Mainland China and Hong Kong city detail','中国内地及香港城市细节'));
  }

  function renderCoreCards() {
    const core = [
      {id:'hong-kong',en:'Hong Kong',zh:'香港',enDesc:'FinTech · Web3 · Software',zhDesc:'金融科技 · Web3 · 软件'},
      {id:'shenzhen',en:'Mainland China',zh:'中国内地',enDesc:'Deep tech · Semiconductors',zhDesc:'硬科技 · 半导体 · 先进制造'},
      {id:'singapore',en:'Singapore',zh:'新加坡',enDesc:'FinTech · Regional partnerships',zhDesc:'金融科技 · 区域合作'},
      {id:'philippines',en:'Philippines',zh:'菲律宾',enDesc:'Payments · Software · Property',zhDesc:'数字支付 · 企业软件 · 房地产'}
    ];
    $('core-cards').innerHTML = core.map(m => `<button class="core-card" data-core="${m.id}" aria-label="${tr('Explore ','探索')}${name(m)}"><span class="core-card-label"><span class="core-diamond">◆</span>${name(m)}</span><small>${m[state.lang+'Desc']}</small><span class="core-arrow">↗</span></button>`).join('');
  }

  function renderControls() {
    $('industry-filters').innerHTML = `<button class="filter-btn ${state.industry === 'all' ? 'selected' : ''}" data-industry="all" aria-pressed="${state.industry === 'all'}">${tr('All industries','全部行业')}</button>` + industries.map(i => `<button class="filter-btn ${state.industry === i.id ? 'selected' : ''}" style="--industry-color:${i.color}" data-industry="${i.id}" aria-pressed="${state.industry === i.id}" aria-label="${name(i)}"><i aria-hidden="true"></i>${state.lang === 'en' ? i.short : {fintech:'金融科技 / Web3',property:'房地产 / 基建',deeptech:'硬科技 / 半导体',software:'软件 / AI',resources:'矿业 / 自然资源',marketing:'AI 营销'}[i.id]}</button>`).join('');
    $('region').innerHTML = regions.map(r => `<option value="${r.id}" ${r.id === state.region ? 'selected' : ''}>${name(r)}</option>`).join('');
    const count = visibleMarkets().length;
    $('match-count').textContent = tr(`${count} of 15 locations`,`${count} / 15 个节点`);
    $('view-map').classList.toggle('selected',state.view === 'map');
    $('view-list').classList.toggle('selected',state.view === 'list');
    $('view-map').setAttribute('aria-pressed',state.view === 'map');
    $('view-list').setAttribute('aria-pressed',state.view === 'list');
    $('market-list').hidden = state.view !== 'list';
    document.querySelector('.map-layout').classList.toggle('list-mode',state.view === 'list');
  }

  function tags(m,ids) {
    return ids.map(id => `<span class="industry-tag ${m.proposed.includes(id) ? 'is-proposed' : ''}">${fullIndustry(id)}${m.proposed.includes(id) ? `<small>${tr('Proposed','建议')}</small>` : ''}</span>`).join('');
  }

  function renderDetail() {
    const m = findMarket(state.selected);
    if (!m || !isMatch(m)) {
      $('location-detail').innerHTML = `<div class="empty-detail"><p>${tr('No matching locations.<br>Try another industry or region.','暂无匹配节点。<br>请更换行业或地区筛选。')}</p></div>`;
      $('location-detail').removeAttribute('aria-labelledby');
      return;
    }
    $('location-detail').setAttribute('aria-labelledby','detail-title');
    const region = regions.find(r => r.id === m.region);
    const city = state.lang === 'en' ? m.city : m.city_zh;
    $('location-detail').innerHTML = `
      <div class="detail-top"><span class="detail-region">${name(region)}</span><span class="detail-order">${String(markets.indexOf(m)+1).padStart(2,'0')} / 15</span></div>
      <div class="detail-location-code">${m.core ? '◆ '+tr('STRATEGIC FOCUS','战略重点') : '＋ '+tr('GLOBAL NETWORK','全球网络')}</div>
      <h3 id="detail-title">${name(m)}</h3><div class="detail-coordinate">${city} · ${coordinates(m)}</div>
      <div class="detail-badges"><span class="badge ${m.core ? 'core-badge' : ''}">${m.core ? '◆' : '○'} ${priorityText(m)}${m.core === 'china' ? tr(' · Mainland China',' · 中国内地') : ''}</span><span class="badge status-${m.status}">${statusText(m)}</span></div>
      <div class="detail-label">${tr('PRIMARY INDUSTRIES','主要行业')}</div><div class="industry-tags">${tags(m,m.primary)}</div>
      ${m.secondary.length ? `<div class="detail-label">${tr('SECONDARY INDUSTRIES','补充行业')}</div><div class="industry-tags secondary-tags">${tags(m,m.secondary)}</div>` : ''}
      ${m.subtags ? `<div class="detail-subtags">${m.subtags.map(t=>state.lang==='en'?t:({'Semiconductors':'半导体','Advanced Manufacturing':'先进制造','Electronics Manufacturing':'电子制造'}[t]||t)).join(' · ')}</div>` : ''}
      <p class="detail-description">${m[state.lang+'Desc']}</p>
      <div class="detail-bottom"><a class="detail-contact" href="${homeHref()}#contact"><span>${tr('Explore partnership','探索合作机会')}</span><span>↗</span></a><p class="detail-note">${tr('Continues to our existing contact form.','前往官网现有联系表单。')}</p></div>`;
  }

  function renderList() {
    const current = visibleMarkets();
    $('market-list').innerHTML = current.length ? current.map(m => `<button class="list-location ${state.selected === m.id ? 'selected' : ''}" data-location="${m.id}" aria-pressed="${state.selected === m.id}"><strong><span class="list-flag">${m.core ? '◆' : '○'}</span>${name(m)}</strong><span class="list-industries">${[...m.primary,...m.secondary].map(shortIndustry).join(' · ')}</span><small>${priorityText(m)} · ${statusText(m)}${m.proposed.length ? tr(' · Includes proposed directions',' · 含建议方向') : ''}</small></button>`).join('') : `<p class="empty-list">${tr('No matching locations. Try another industry or region.','暂无匹配节点，请更换行业或地区。')}</p>`;
  }

  function renderIndustryCards() {
    $('industry-cards').innerHTML = industries.map((i,index) => {
      const associated = markets.filter(m => [...m.primary,...m.secondary].includes(i.id));
      const defined = associated.filter(m => !m.proposed.includes(i.id));
      const mainNames = [...new Set(defined.map(m => m.core === 'china' ? tr('Mainland China','中国内地') : name(m)))];
      const countText=associated.some(m=>m.proposed.includes(i.id)) ? tr(`${associated.length} locations, including proposed directions`,`${associated.length} 个关联节点，含建议方向`) : tr(`${associated.length} associated locations`,`${associated.length} 个关联节点`);
      return `<button class="industry-card ${state.industry === i.id ? 'selected' : ''}" data-sector="${i.id}" style="--industry-color:${i.color}" aria-pressed="${state.industry === i.id}" aria-label="${tr('Explore ','探索')+name(i)}"><span class="industry-card-top"><span class="industry-icon">${icon(i.icon)}</span><span class="industry-number">0${index+1} / 06</span></span><h3>${name(i)}</h3><span class="industry-alternate">${state.lang === 'en' ? i.zh : i.en}</span><p>${i[state.lang+'Desc']}</p><span class="sector-tags">${i.tags.join(' / ')}</span><span class="industry-card-bottom"><span class="industry-locations">${mainNames.join(' · ') || tr('Proposed market directions','建议市场方向')}<br>${countText}</span><b>↗</b></span></button>`;
    }).join('');
  }

  function renderDirectory() {
    $('directory-grid').innerHTML = markets.map(m => `<div class="directory-location"><button data-directory="${m.id}"><strong>${m.core ? '◆ ' : ''}${name(m)}</strong></button><span>${[...m.primary,...m.secondary].map(id => shortIndustry(id)+(m.proposed.includes(id) ? tr(' (proposed)','（建议）') : '')).join(' · ')}${m.subtags ? ' · '+m.subtags.join(' / ') : ''}</span><br><small>${priorityText(m)} · ${statusText(m)}</small></div>`).join('');
  }

  const countries = topojson.feature(window.CW_WORLD,window.CW_WORLD.objects.countries).features.filter(f => f.id !== '010');
  let resizeTimer;
  function drawMap() {
    if (state.view !== 'map') return;
    const container = $('world-map');
    const width = container.clientWidth, height = container.clientHeight;
    if (!width) return;
    const mobile = width < 470;
    const svg = d3.select('#world-map').attr('viewBox',`0 0 ${width} ${height}`);
    svg.selectAll('g,defs').remove();
    const projection = d3.geoNaturalEarth1()
      .rotate([-mapCenter.lon,0])
      .center([0,mapCenter.lat])
      .fitExtent([[14,50],[width-14,height-40]],{type:'Sphere'})
      .translate([width/2,height/2]);
    const path = d3.geoPath(projection);
    const defs = svg.append('defs');
    defs.append('clipPath').attr('id','land-clip').append('path').attr('d',path({type:'FeatureCollection',features:countries}));
    const map = svg.append('g');
    map.append('path').datum(d3.geoGraticule10()).attr('d',path).attr('class','graticule');
    const activeIsos = new Set(visibleMarkets().map(m => m.iso));
    map.selectAll('.land').data(countries).join('path').attr('d',path).attr('class',d => `land ${activeIsos.has(d.id) ? 'focus-country' : 'dim-country'}`).attr('aria-hidden','true');
    const dots = map.append('g').attr('clip-path','url(#land-clip)').attr('aria-hidden','true');
    let dotPath = '';
    for(let x=6;x<width;x+=5) for(let y=8;y<height;y+=5) dotPath+=`M${x},${y}h.6`;
    dots.append('path').attr('d',dotPath).attr('stroke','#7da2b7').attr('stroke-width',1.2).attr('opacity',.17);
    const oceans = [{en:'INDIAN OCEAN',zh:'印度洋',coords:[75,-25]},{en:'PACIFIC OCEAN',zh:'太平洋',coords:[-143,3]}];
    map.selectAll('.ocean-label').data(oceans).join('text').attr('class','ocean-label').attr('text-anchor','middle').attr('x',d=>projection(d.coords)[0]).attr('y',d=>projection(d.coords)[1]).text(d=>name(d));
    const centerGuide = map.append('g').attr('class','map-center-guide').attr('aria-hidden','true').attr('transform',`translate(${projection([mapCenter.lon,mapCenter.lat])})`);
    centerGuide.append('circle').attr('r',24);
    centerGuide.append('path').attr('d','M-32,0h7M25,0h7M0,-32v7M0,25v7');
    const nodes = map.append('g').selectAll('g').data(markets).join('g').attr('class',m=>`node ${m.core ? 'core' : ''} ${m.status === 'exploring' ? 'exploring' : ''} ${state.selected === m.id ? 'selected' : ''} ${isMatch(m) ? '' : 'hidden-node'}`).attr('transform',m=>`translate(${projection([m.lon,m.lat]).join(',')})`).attr('data-map-location',m=>m.id).attr('role','button').attr('tabindex',m=>isMatch(m) ? 0 : -1).attr('aria-label',m=>`${name(m)} · ${priorityText(m)} · ${statusText(m)}`).attr('aria-pressed',m=>state.selected===m.id).on('click',(event,m)=>selectLocation(m.id)).on('keydown',(event,m)=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();selectLocation(m.id);}});
    nodes.append('circle').attr('class','node-hit').attr('r',m=>m.core === 'china' ? 4 : mobile ? 14 : 13);
    nodes.filter(m=>!!m.core).append('circle').attr('class','node-halo').attr('r',m=>m.core === 'china' ? 6 : state.selected===m.id ? 19 : 12);
    nodes.append('circle').attr('class','node-ring').attr('r',m=>m.core === 'china' ? 2.4 : m.core ? 5 : 4);
    nodes.append('circle').attr('class','node-center').attr('r',m=>m.core === 'china' ? .8 : 1.4);
    const shownLabels = mobile ? ['hong-kong','philippines','japan','dubai','tonga','suriname','png'] : markets.filter(m=>m.core !== 'china').map(m=>m.id);
    const labelNodes = nodes.filter(m=>shownLabels.includes(m.id));
    const offset = m => {
      if (!mobile) {
        const factor = Math.min(1,width/850);
        const label = m.id === 'hong-kong' ? [-40,7] : m.id === 'suriname' ? [24,-21] : m.label;
        return [label[0]*factor,label[1]*factor];
      }
      return {'hong-kong':[-18,-9],philippines:[6,20],japan:[13,-23],dubai:[-18,-25],tonga:[10,20],suriname:[12,22],png:[28,6]}[m.id];
    };
    labelNodes.append('path').attr('class','label-line').attr('d',m=>{const [x,y]=offset(m);return `M0,0L${x*.6},${y}H${x}`;});
    labelNodes.append('text').attr('class','node-label').attr('x',m=>offset(m)[0]+(offset(m)[0]<0?-3:3)).attr('y',m=>offset(m)[1]+3).attr('text-anchor',m=>offset(m)[0]<0?'end':'start').style('font-size',mobile?'8px':width<700?'9px':'11px').text(m=>mobile&&m.id==='png'?tr('Papua New Guinea','巴新'):name(m)).each(function(m){
      const point = projection([m.lon,m.lat]), bounds = this.getBBox();
      const shift = Math.max(0,10-point[0]-bounds.x) - Math.max(0,point[0]+bounds.x+bounds.width-width+10);
      if(shift){
        const [x,y] = offset(m), adjusted = x+shift;
        d3.select(this).attr('x',Number(this.getAttribute('x'))+shift);
        d3.select(this.parentNode).select('.label-line').attr('d',`M0,0L${adjusted*.6},${y}H${adjusted}`);
      }
    });
    const cluster=projection([114.15,24.0]);
    const cc=map.append('g').attr('opacity',visibleMarkets().some(m=>m.region==='china')?1:.2).attr('aria-hidden','true');
    const lx=cluster[0]-(mobile?43:48), ly=cluster[1]-(mobile?40:59);
    cc.append('path').attr('class','china-callout-line').attr('d',`M${cluster}L${lx+20},${ly+9}H${lx-10}`);
    cc.append('text').attr('class','china-callout').attr('x',lx-10).attr('y',ly).attr('text-anchor','middle').style('font-size',mobile?'7px':'9px').text(tr('Mainland China','中国内地'));
    cc.append('text').attr('class','china-callout').attr('x',lx-10).attr('y',ly+12).attr('text-anchor','middle').style('font-size','7px').style('fill','#668fa1').text(tr('3 cities · detail below','3 个城市 · 见放大图'));
    drawChina();
  }

  function drawChina() {
    const element=$('china-map'), width=element.clientWidth, height=element.clientHeight;
    const svg=d3.select(element).attr('viewBox',`0 0 ${width} ${height}`);
    svg.selectAll('*').remove();
    const projection=d3.geoMercator().center([117.1,26.8]).scale(Math.min((width-105)/(.15), (height-46)/(.178))).translate([width/2,height/2-13]);
    const path=d3.geoPath(projection);
    svg.append('g').selectAll('path').data(countries.filter(f=>['156','158','704'].includes(f.id))).join('path').attr('class','land').attr('d',path);
    const local=markets.filter(m=>m.region==='china');
    const offsets={suzhou:[14,1],dongguan:[-25,-17],shenzhen:[32,0],'hong-kong':[12,22]};
    const groups=svg.append('g').selectAll('g').data(local).join('g').attr('class',m=>`node core ${state.selected===m.id?'selected':''} ${isMatch(m)?'':'hidden-node'}`).attr('transform',m=>`translate(${projection([m.lon,m.lat])})`).attr('data-inset-location',m=>m.id).attr('role','button').attr('tabindex',m=>isMatch(m)?0:-1).attr('aria-label',m=>name(m)).attr('aria-pressed',m=>state.selected===m.id).on('click',(event,m)=>selectLocation(m.id)).on('keydown',(event,m)=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();selectLocation(m.id);}});
    groups.append('path').attr('class','label-line').attr('d',m=>{let [x,y]=offsets[m.id];return `M0,0L${x*.6},${y}H${x}`;});
    groups.append('circle').attr('class','node-ring').attr('r',2.6);
    groups.append('text').attr('class','node-label').attr('x',m=>offsets[m.id][0]+(offsets[m.id][0]<0?-3:3)).attr('y',m=>offsets[m.id][1]+3).attr('text-anchor',m=>offsets[m.id][0]<0?'end':'start').text(name);
    groups.append('rect').attr('fill','transparent').attr('x',m=>offsets[m.id][0]-(offsets[m.id][0]<0?48:4)).attr('y',m=>offsets[m.id][1]-12).attr('width',62).attr('height',23);
  }

  function render() {
    applyLanguage();renderCoreCards();renderControls();renderDetail();renderList();renderIndustryCards();renderDirectory();drawMap();
  }
  function selectLocation(id) {
    if(!findMarket(id)||!isMatch(findMarket(id)))return;
    state.selected=id;renderDetail();renderList();drawMap();
    if(innerWidth<801) $('location-detail').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});
  }
  function updateFilter() {
    if(!findMarket(state.selected)||!isMatch(findMarket(state.selected)))state.selected=visibleMarkets()[0]?.id||null;
    render();
  }
  document.addEventListener('click',event=>{
    const filter=event.target.closest('[data-industry]');
    const core=event.target.closest('[data-core]');
    const card=event.target.closest('[data-sector]');
    const loc=event.target.closest('[data-location]');
    const directory=event.target.closest('[data-directory]');
    if(filter){state.industry=filter.dataset.industry;updateFilter();}
    if(core){state.industry='all';state.region=core.dataset.core==='shenzhen'?'china':'all';state.selected=core.dataset.core;state.view='map';render();$('network').scrollIntoView({block:'start'});}
    if(card){state.industry=card.dataset.sector;state.region='all';updateFilter();$('network').scrollIntoView({block:'start'});}
    if(loc)selectLocation(loc.dataset.location);
    if(directory){state.region='all';state.industry='all';state.selected=directory.dataset.directory;render();$('network').scrollIntoView({block:'start'});}
  });
  $('region').addEventListener('change',()=>{state.region=$('region').value;updateFilter();});
  $('language').addEventListener('click',()=>{
    state.lang=state.lang==='en'?'zh':'en';
    const url = new URL(location.href);
    if(state.lang==='zh')url.searchParams.set('lang','zh');else url.searchParams.delete('lang');
    history.replaceState(null,'',url);
    render();
  });
  function closeSiteMenu() {
    $('site-mobile-nav').hidden=true;
    $('site-menu-toggle').setAttribute('aria-expanded','false');
  }
  $('site-menu-toggle').addEventListener('click',()=>{
    const open=$('site-mobile-nav').hidden;
    $('site-mobile-nav').hidden=!open;
    $('site-menu-toggle').setAttribute('aria-expanded',String(open));
  });
  $('site-mobile-nav').addEventListener('click',event=>{if(event.target.closest('a'))closeSiteMenu();});
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&!$('site-mobile-nav').hidden){closeSiteMenu();$('site-menu-toggle').focus();}
  });
  $('reset').addEventListener('click',()=>{Object.assign(state,{industry:'all',region:'all',selected:mapCenter.id,view:'map'});render();});
  $('view-map').addEventListener('click',()=>{state.view='map';renderControls();drawMap();});
  $('view-list').addEventListener('click',()=>{state.view='list';renderControls();renderList();});
  new ResizeObserver(()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(drawMap,80);}).observe($('map-canvas'));
  render();
})();
