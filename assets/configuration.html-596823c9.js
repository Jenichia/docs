import{_ as o,r as p,o as i,c as r,b as n,e,a,f as t}from"./app-3a6cd0fb.js";const l={},c=t(`<h3 id="initial-config" tabindex="-1"><a class="header-anchor" href="#initial-config" aria-hidden="true">#</a> <strong>Initial config</strong></h3><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>After modifying the configuration file in <code>config.json</code>, you need to restart AList to take effect</p><ul><li>Windows/Mac: <code>data/config.json</code> in the same level folder as AList</li><li>Linux: One-click Script /opt/alist/data/config.json, manually install /xx-path/<code>data/config.json</code></li><li>Docker: Enter the docker container, <code>data/config.json</code></li><li>openwrt: If you use <code>Luci-APP-Alist</code>, please modify on the webpage,other Please find the AList execution file, the same level directory <code>data/config.json</code></li><li>Other: Find the <code>data/config.json</code> in AList executing files</li></ul></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;force&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;site_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cdn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;jwt_secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;random_generated&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;token_expires_in&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
  <span class="token property">&quot;database&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sqlite3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;db_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\data.db&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;table_prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;x_&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ssl_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scheme&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;http_port&quot;</span><span class="token operator">:</span> <span class="token number">5244</span><span class="token punctuation">,</span>
    <span class="token property">&quot;https_port&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;force_https&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cert_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;key_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unix_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unix_file_perm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;temp_dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\temp&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bleve_dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\bleve&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\log\\\\log.log&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_backups&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_age&quot;</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
    <span class="token property">&quot;compress&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;delayed_start&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;max_connections&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tls_insecure_skip_verify&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="field-description" tabindex="-1"><a class="header-anchor" href="#field-description" aria-hidden="true">#</a> Field Description</h2><h3 id="force" tabindex="-1"><a class="header-anchor" href="#force" aria-hidden="true">#</a> <strong>force</strong></h3><p>The program will preferentially read the configuration from the environment variable, set <code>force</code> to <code>true</code> to force the program to read the configuration file.</p><h3 id="site-url" tabindex="-1"><a class="header-anchor" href="#site-url" aria-hidden="true">#</a> <strong>site_url</strong></h3><p>The url of your <code>alist</code> site, such as <code>https://pan.nn.ci</code>.This address will be used in some places in the program, If you do not set this field, Some features may not work properly, such as:</p><ul><li>thumbnail of <code>LocalStorage</code></li><li>Preview after opening web proxy</li><li>The download address after opening the web proxy</li><li>Reverse proxy to sub directory</li><li>...</li></ul><p>Please do not include <code>/</code> at the end of the URL link, refer to the following example, otherwise the above function will also not be available or exceptions will occur</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># Correct way of writing<span class="token operator">:</span>
<span class="token property">&quot;site_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://al.nn.ci&quot;</span><span class="token punctuation">,</span>
# Wrong way of writing<span class="token operator">:</span>
<span class="token property">&quot;site_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://al.nn.ci/&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> <strong>cdn</strong></h3><p>The CDN address, if you want to use CDN, you can set this field, the <code>$version</code> will be replaced with the real version of <code>alist-web</code> This is dynamic and changeable. Existing dist resources are hosted on both npm and GitHub, and their locations are:</p>`,13),u={href:"https://www.npmjs.com/package/alist-web",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/alist-org/web-dist",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"So you can use any npm or github cdn as the path, for example:",-1),k={href:"https://registry.npmmirror.com/alist-web/$version/files/dist/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cdn.jsdelivr.net/npm/alist-web@$version/dist/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://unpkg.com/alist-web@$version/dist/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://cdn.jsdelivr.net/gh/alist-org/web-dist@$version/dist/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://cdn1.tianli0.top/npm/alist-web@$version/dist/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://cdn1.tianli0.top/gh/alist-org/web-dist@$version/dist/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://npm.elemecdn.com/alist-web@$version/dist/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://jsd.onmicrosoft.cn/npm/alist-web@$version/dist/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://jsd.onmicrosoft.cn/gh/alist-org/web-dist@$version/dist/",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>Also you can keep it empty to use local dist.</p><h3 id="jwt-secret" tabindex="-1"><a class="header-anchor" href="#jwt-secret" aria-hidden="true">#</a> <strong>jwt_secret</strong></h3><p>The secret used to sign the JWT token, random generated first time start.</p><h3 id="token-expires-in" tabindex="-1"><a class="header-anchor" href="#token-expires-in" aria-hidden="true">#</a> <strong>token_expires_in</strong></h3><p>User login expiration time, unit: <code>hours</code>.</p><h3 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> <strong>database</strong></h3><p>The database configuration, the default is <code>sqlite3</code>, you can also use <code>mysql</code> or <code>postgres</code>.</p><ul><li>If you do not use <code>MySQL</code> or <code>postgres</code>, the configuration file database options do not need to be modified</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;database&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sqlite3&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//database type</span>
    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>         <span class="token comment">//database host</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>          <span class="token comment">//database port</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>         <span class="token comment">//database account</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment">//database password</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>         <span class="token comment">//database name</span>
    <span class="token property">&quot;db_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\data.db&quot;</span><span class="token punctuation">,</span>     <span class="token comment">//Database location, used by sqlite3</span>
    <span class="token property">&quot;table_prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;x_&quot;</span><span class="token punctuation">,</span>           <span class="token comment">//database table name prefix</span>
    <span class="token property">&quot;ssl_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>      <span class="token comment">//To control the encryption options during the SSL handshake, the parameters can be searched by themselves, or check the answer from ChatGPT below</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>Expand to view \`ssl_mode\` parameter options</summary><p>If you don&#39;t know how to fill in, fill in the default blank, no need to modify, if you can&#39;t use it if you don&#39;t fill it in, do your own research, and you can&#39;t provide much effective help</p><hr><p>In MySQL, the <code>ssl_mode</code> parameter is used to specify the authentication mode of the SSL connection. Here are a few common options:</p><ul><li><code>DISABLED</code>: Disable SSL connections.</li><li><code>PREFERRED</code>: If the server has SSL enabled, use an SSL connection; otherwise use a normal connection.</li><li><code>REQUIRED</code>: Must use SSL connection, if the server does not support SSL connection, the connection will fail.</li><li><code>VERIFY_CA</code>: Must use SSL connection and verify the authenticity of the server certificate.</li><li><code>VERIFY_IDENTITY</code>: must use an SSL connection and verify the authenticity of the server certificate and that the name matches the connecting hostname.</li></ul><p>MySQL 5.x and 8.x are also different. If you use the free/fee database provided by the service provider, the service provider will have documentation. You must know the database you deploy yourself.</p><hr><p>In PostgreSQL, the <code>ssl_mode</code> parameter is used to specify how the client uses SSL connections. Here are a few common options:</p><ul><li><code>disable</code>: Disable SSL connections.</li><li><code>allow</code>: SSL connections are allowed, but not required.</li><li><code>prefer</code>: If the server has SSL enabled, use an SSL connection; otherwise use a normal connection.</li><li><code>require</code>: Must use SSL connection, if the server does not support SSL connection, the connection will fail.</li><li><code>verify-ca</code>: Must use SSL connection and verify the authenticity of the server certificate.</li><li><code>verify-full</code>: MUST connect using SSL and verify the authenticity and name of the server certificate matches the connected hostname.</li></ul><hr><div style="text-align:right;"><p>⚠️⚠️<strong>The above parameters are from ChatGPT, the authenticity/practicability/accuracy has not been verified</strong>⚠️⚠️</p></div></details><h3 id="scheme" tabindex="-1"><a class="header-anchor" href="#scheme" aria-hidden="true">#</a> <strong>scheme</strong></h3><p>The scheme configuration, if you want to use https, you can set this field.</p><ul><li>Fill in the example: Remember to throw the certificate file into the data directory to be recognized~</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;scheme&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// The http/https address to listen on, default \`0.0.0.0\`</span>
    <span class="token property">&quot;http_port&quot;</span><span class="token operator">:</span> <span class="token number">5244</span><span class="token punctuation">,</span>      <span class="token comment">// The http port to listen on, default \`5244\`, if you want to disable http, set it to \`-1\`</span>
    <span class="token property">&quot;https_port&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>       <span class="token comment">// The https port to listen on, default \`-1\`, if you want to enable https, set it to non \`-1\`</span>
    <span class="token property">&quot;force_https&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>   <span class="token comment">// Whether the HTTPS protocol is forcibly, if it is set to True, the user can only access the website through HTTPS</span>
    <span class="token property">&quot;cert_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\cert.crt&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// Path of cert file</span>
    <span class="token property">&quot;key_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\key.key&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// Path of key file</span>
    <span class="token property">&quot;unix_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>        <span class="token comment">// Unix socket file path to listen on, default empty, if you want to use unix socket, set it to non empty</span>
    <span class="token property">&quot;unix_file_perm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>    <span class="token comment">// Unix socket file permission, set to the appropriate permissions</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="temp-dir" tabindex="-1"><a class="header-anchor" href="#temp-dir" aria-hidden="true">#</a> <strong>temp_dir</strong></h3><p>The temporary directory, default <code>data/temp</code></p><div class="hint-container danger"><p class="hint-container-title">Warning</p><p>temp_dir is a temporary folder exclusive to alist. In order to avoid program interruption and generate garbage files, it will be cleared every time it starts, so please do not manually put any content in this folder, and do not use this folder and its subfolders when using docker Folders are mapped to folders in use.</p></div><h3 id="bleve-dir" tabindex="-1"><a class="header-anchor" href="#bleve-dir" aria-hidden="true">#</a> <strong>bleve_dir</strong></h3><p>When you use <strong><code>bleve</code></strong> indexes, the location of the data storage</p><h3 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> <strong>log</strong></h3><p>The log configuration, if you want to setup the log level, you can set this field.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>					<span class="token comment">//Whether to turn on the log record function, the default is to open the status true</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\log\\\\log.log&quot;</span><span class="token punctuation">,</span>	<span class="token comment">//The path and name of the log file</span>
    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>					<span class="token comment">//the maximum size of a single log file, in MB. After reaching the specified size, the file will be automatically split.</span>
    <span class="token property">&quot;max_backups&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>				<span class="token comment">//the number of log backups to keep. Old backups will be deleted automatically when the limit is exceeded.</span>
    <span class="token property">&quot;max_age&quot;</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>					<span class="token comment">//The maximum number of days preserved in the log file, the log file that exceeds the number of days will be deleted</span>
    <span class="token property">&quot;compress&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>				<span class="token comment">//Whether to enable log file compression functions. After compression, the file size can be reduced, but you need to decompress when viewing, and the default is to close the state false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delayed-start" tabindex="-1"><a class="header-anchor" href="#delayed-start" aria-hidden="true">#</a> <strong>delayed_start</strong></h3><p><strong>Unit: s</strong> (V3.19.0 new function)</p><p>Whether to delay start, generally this function is often used in Alist to start the self -startup option</p><p>Because sometimes the network connection is slow, the driver that needs to be connected after the Alist is launched is too fast, so that it cannot be opened normally.</p><h3 id="max-connections" tabindex="-1"><a class="header-anchor" href="#max-connections" aria-hidden="true">#</a> <strong>max_connections</strong></h3><p>The maximum number of connections (concurrent) at the same time, the default is 0, that is, unlimited.</p><ul><li>10 or 20 is recommended for general equipment such as n1 <ul><li>Use scenarios (for example, if the picture mode is turned on, the device will crash if the concurrency is not very good)</li></ul></li></ul><h3 id="tls-insecure-skip-verify" tabindex="-1"><a class="header-anchor" href="#tls-insecure-skip-verify" aria-hidden="true">#</a> <strong>tls_insecure_skip_verify</strong></h3><p>Whether to examine the SSL certificate, if there is a problem with the certificate of the website used after opening (such as not including the intermediate certificate, certificate expiration, certificate forgery, etc.), the service will not be available,Close this option, please try to run the program in a safe network environment</p>`,31);function x(S,j){const s=p("ExternalLinkIcon");return i(),r("div",null,[c,n("ul",null,[n("li",null,[n("a",u,[e("https://www.npmjs.com/package/alist-web"),a(s)])]),n("li",null,[n("a",d,[e("https://github.com/alist-org/web-dist"),a(s)])])]),h,n("ul",null,[n("li",null,[n("a",k,[e("https://registry.npmmirror.com/alist-web/$version/files/dist/"),a(s)])]),n("li",null,[n("a",m,[e("https://cdn.jsdelivr.net/npm/alist-web@$version/dist/"),a(s)])]),n("li",null,[n("a",v,[e("https://unpkg.com/alist-web@$version/dist/"),a(s)])]),n("li",null,[n("a",f,[e("https://cdn.jsdelivr.net/gh/alist-org/web-dist@$version/dist/"),a(s)])]),n("li",null,[n("a",b,[e("https://cdn1.tianli0.top/npm/alist-web@$version/dist/"),a(s)])]),n("li",null,[n("a",g,[e("https://cdn1.tianli0.top/gh/alist-org/web-dist@$version/dist/"),a(s)])]),n("li",null,[n("a",q,[e("https://npm.elemecdn.com/alist-web@$version/dist/"),a(s)])]),n("li",null,[n("a",y,[e("https://jsd.onmicrosoft.cn/npm/alist-web@$version/dist/"),a(s)])]),n("li",null,[n("a",_,[e("https://jsd.onmicrosoft.cn/gh/alist-org/web-dist@$version/dist/"),a(s)])])]),w])}const T=o(l,[["render",x],["__file","configuration.html.vue"]]);export{T as default};