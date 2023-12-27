// SPDX-License-Identifier: GPL-3.0-or-later

// Codacy declarations
/* global NETDATA */

var netdataDashboard = window.netdataDashboard || {};

// Informational content for the various sections of the GUI (menus, sections, charts, etc.)

// ----------------------------------------------------------------------------
// Menus

netdataDashboard.menu = {
    'system': {
        title: '系统概观',
        icon: '<i class="fas fa-bookmark"></i>',
        info: '一眼掌握系统效能关键指标。'
    },

    'services': {
        title: '系统服务',
        icon: '<i class="fas fa-cogs"></i>',
        info: '系统服务的使用情况。netdata 以 CGROUPS 监视所有系统服务。'
    },

    'ap': {
        title: '接入点',
        icon: '<i class="fas fa-wifi"></i>',
        info: '系统上找到的无线接口（即AP模式下的接入点）的性能指标。'
    },

    'tc': {
        title: '服务质量',
        icon: '<i class="fas fa-globe"></i>',
        info: 'Netdata 使用其 <a href=“https://github.com/netdata/netdata/blob/master/collectors/tc.plugin/tc-qos-helper.sh.in” target=“_blank”>tc-helper 插件收集并可视化 <code>tc</code> 类利用率</a>。'+
        '如果您还使用 <a href=“http://firehol.org/#fireqos” target=“_blank”>FireQOS</a> 来设置 QoS，则 netdata 会自动收集接口和类名。'+
        '如果您的 QoS 配置包括开销计算，则此处显示的值将包括这些开销（“网络接口”部分中报告的同一接口的总带宽将低于此处报告的总带宽）。'+
        '与接口相比，QoS 数据收集可能略有时间差（QoS 数据收集使用 BASH 脚本，因此数据收集的几毫秒偏移应该是合理的）。'
    },

    'net': {
        title: '网络介面',
        icon: '<i class="fas fa-sitemap"></i>',
        info: '网络介面的效能指标。'
    },

    'ip': {
        title: '网络堆叠',
        icon: '<i class="fas fa-cloud"></i>',
        info: function (os) {
            if(os === "linux")
                return '系统网络堆栈的指标。这些指标是从 /<code>proc/net/netstat</code> 收集的，适用于 IPv4 和 IPv6 流量，并且与内核网络堆栈的操作相关。';
            else
                return '系统网络堆栈的指标。';
        }
    },

    'ipv4': {
        title: 'IPv4 网络',
        icon: '<i class="fas fa-cloud"></i>',
        info: 'IPv4 效能指标。' +
            '<a href=“https://en.wikipedia.org/wiki/IPv4” target=“_blank”>Internet 协议版本 4 （IPv4） 是 Internet 协议 （IP）</a> 的第四个版本。它是互联网中基于标准的网际网络方法的核心协议之一。IPv4 是一种无连接协议，用于分组交换网络。它以尽力交付的模式运作，因为它不保证交付，也不保证正确的顺序或避免重复交付。这些方面（包括数据完整性）由上层传输协议（如传输控制协议 （TCP））解决。'
    },

    'ipv6': {
        title: 'IPv6 网络',
        icon: '<i class="fas fa-cloud"></i>',
        info: 'IPv6 效能指标。 <a href="https://en.wikipedia.org/wiki/IPv6" target="_blank">Internet 协议版本 6 （IPv6</a>） 是 Internet 协议 （IP） 的最新版本，IP 是一种通信协议，可为网络上的计算机提供标识和定位系统，并通过 Internet 路由流量。IPv6 是由 Internet 工程任务组 （IETF） 开发的，用于处理人们期待已久的 IPv4 地址耗尽问题。IPv6 旨在取代 IPv4。'
    },

    'sctp': {
        title: 'SCTP 网络',
        icon: '<i class="fas fa-cloud"></i>',
        info: '<a href="https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol" target="_blank">流控制传输协议 （SCTP）</a> 是一种在传输层运行的计算机网络协议，其作用类似于流行的协议 TCP 和 UDP。SCTP 提供了 UDP 和 TCP 的一些功能：它像 UDP 一样面向消息，并通过拥塞控制（如 TCP）确保可靠的、按顺序传输消息。它与这些协议的不同之处在于提供多宿主和冗余路径来提高弹性和可靠性。'
    },

    'ipvs': {
        title: 'IP 虚拟服务器',
        icon: '<i class="fas fa-eye"></i>',
        info: '<a href="http://www.linuxvirtualserver.org/software/ipvs.html" target="_blank">IPVS（IP 虚拟服务器）</a>在 Linux 内核内部实现传输层负载平衡，即所谓的第 4 层交换。在主机上运行的IPVS充当真实服务器集群前端的负载平衡器，它可以将基于TCP/UDP的服务的请求定向到真实服务器，并使真实服务器的服务在单个IP地址上显示为虚拟服务。'
    },

    'netfilter': {
        title: '防火墙 (netfilter)',
        icon: '<i class="fas fa-shield-alt"></i>',
        info: 'netfilter 元件效能指标。'
    },

    'ipfw': {
        title: '防火墙 (ipfw)',
        icon: '<i class="fas fa-shield-alt"></i>',
        info: 'ipfw 规则的计数器和内存使用情况。'
    },

    'cpu': {
        title: 'CPU',
        icon: '<i class="fas fa-bolt"></i>',
        info: '系统中每一个 CPU 的详细资讯。全部 CPU 的总量可以到 <a href="#menu_system">系统概观</a> 区段查看。'
    },

    'mem': {
        title: '内存',
        icon: '<i class="fas fa-microchip"></i>',
        info: '系统内存管理的详细资讯。'
    },

    'disk': {
        title: '磁盘',
        icon: '<i class="fas fa-hdd"></i>',
        info: '系统中所有磁盘效能资讯图表。特别留意：这是以 <code>iostat -x</code> 所取得的效能数据做为呈现。在预设情况下，netdata 不会显示单一分割区与未挂载的虚拟磁盘效能图表。若仍想要显示，可以修改 netdata 设定档中的相关设定。'
    },

    'sensors': {
        title: '感测器',
        icon: '<i class="fas fa-leaf"></i>',
        info: '系统已配置相关感测器的读数'
    },

    'ipmi': {
        title: 'IPMI',
        icon: '<i class="fas fa-leaf"></i>',
        info: '智能平台管理接口 （IPMI） 是一组用于自主计算机子系统的计算机接口规范，它提供独立于主机系统的 CPU、固件（BIOS 或 UEFI）和操作系统的管理和监控功能。'
    },

    'samba': {
        title: 'Samba',
        icon: '<i class="fas fa-folder-open"></i>',
        info: '此系统的 Samba 文件共享操作的性能指标。Samba 是 Windows 服务（包括 Windows SMB 协议文件共享）的实现。'
    },

    'nfsd': {
        title: 'NFS 服务器',
        icon: '<i class="fas fa-folder-open"></i>',
        info: '网络文件服务器的性能指标。NFS 是一种分布式文件系统协议，允许客户端计算机上的用户通过网络访问文件，就像访问本地存储一样。与许多其他协议一样，NFS 建立在开放网络计算远程过程调用 （ONC RPC） 系统之上。NFS 是征求意见 （RFC） 中定义的开放标准。'
    },

    'nfs': {
        title: 'NFS 客户端',
        icon: '<i class="fas fa-folder-open"></i>',
        info: '显示本机做为 NFS 客户端的效能指标。'
    },

    'zfs': {
        title: 'ZFS 档案系统',
        icon: '<i class="fas fa-folder-open"></i>',
        info: 'ZFS 档案系统的效能指标。以下图表呈现来自 <a href="https://github.com/zfsonlinux/zfs/blob/master/cmd/arcstat/arcstat.py" target="_blank">arcstat.py</a> 与 <a href="https://github.com/zfsonlinux/zfs/blob/master/cmd/arc_summary/arc_summary.py" target="_blank">arc_summary.py</a> 的效能数据。'
    },

    'btrfs': {
        title: 'BTRFS 档案系统',
        icon: '<i class="fas fa-folder-open"></i>',
        info: 'BTRFS 档案系统磁盘空间使用指标。'
    },

    'apps': {
        title: '应用程序',
        icon: '<i class="fas fa-heartbeat"></i>',
        info: '每个应用程序的统计信息是使用 netdata 的 <code>apps.plugin</code> 收集的。该插件遍历了所有进程并汇总了 /<code>etc/netdata/apps_groups.conf</code> 中定义的相关应用程序的统计信息，可以通过运行 <code>$ /etc/netdata/edit-config apps_groups.conf</code> 对其进行编辑（默认值为 <a href=“https://github.com/netdata/netdata/blob/master/collectors/apps.plugin/apps_groups.conf” target=“_blank”>here</a>）。该插件在内部构建一个进程树（很像 <code>ps fax</code> 所做的那样），并将进程组合在一起（评估子进程和父进程），以便结果始终是具有一组预定义维度的图表（当然，只报告发现正在运行的应用程序组）。报告的值与 top 兼容，尽管 netdata 插件也计算退出子进程的资源（与 <code>top</code> 不同，<code>top</code> 仅显示当前正在运行的进程的资源）。因此，对于 shell 脚本等进程，报告的值包括这些脚本在每个时间范围内运行的命令所使用的资源。',
        height: 1.5
    },

    'users': {
        title: '使用者',
        icon: '<i class="fas fa-user"></i>',
        info: '使用 netdata 的 <code>apps.plugin</code> 收集每个用户的统计数据。该插件遍历所有流程并汇总每个用户的统计信息。报告的值与 top 兼容，尽管 netdata 插件也计算退出子进程的资源（与 <code>top</code> 不同，<code>top</code> 仅显示当前正在运行的进程的资源）。因此，对于 shell 脚本等进程，报告的值包括这些脚本在每个时间范围内运行的命令所使用的资源。',
        height: 1.5
    },

    'groups': {
        title: '使用者群组',
        icon: '<i class="fas fa-users"></i>',
        info: '每个用户组的统计信息是使用 netdata 的 <code>apps.plugin</code> 收集的。此插件遍历所有进程并汇总每个用户组的统计信息。报告的值与 top 兼容，尽管 netdata 插件也计算退出子进程的资源（与 <code>top</code> 不同，<code>top</code> 仅显示当前正在运行的进程的资源）。因此，对于 shell 脚本等进程，报告的值包括这些脚本在每个时间范围内运行的命令所使用的资源。',
        height: 1.5
    },

    'netdata': {
        title: 'Netdata 监视',
        icon: '<i class="fas fa-chart-bar"></i>',
        info: 'netdata 本身与外挂程式的效能数据。'
    },

    'example': {
        title: '范例图表',
        info: '范例图表，展示外挂程式的架构之用。'
    },

    'cgroup': {
        title: 'cgroups',
        icon: '<i class="fas fa-th"></i>',
        info: '容器资源使用率指标。netdata 从 <b>cgroups</b> (<b>control groups</b> 的缩写) 中读取这些资讯，cgroups 是 Linux 核心的一个功能，做限制与计算程序集中的资源使用率 (CPU、内存、磁盘 I/O、网络...等等)。<b>cgroups</b> 与 <b>namespaces</b> (程序之间的隔离) 结合提供了我们所说的：<b>容器</b>。'
    },

    'cgqemu': {
        title: 'cgqemu',
        icon: '<i class="fas fa-th-large"></i>',
        info: 'QEMU 虚拟机资源使用率效能指标。QEMU (Quick Emulator) 是自由与开源的虚拟机器平台，提供硬体虚拟化功能。'
    },

    'fping': {
        title: 'fping',
        icon: '<i class="fas fa-exchange-alt"></i>',
        info: '网络延迟统计信息，通过 <b>fping</b>。<b>fping</b> 是一个向网络主机发送 ICMP 回显探测的程序，类似于 ping，但在 <code>ping</code> 多个主机时性能要好得多。3.15 之后的 fping 版本可以直接作为 netdata 插件使用。'
    },

    'httpcheck': {
        title: 'Http 检查',
        icon: '<i class="fas fa-heartbeat"></i>',
        info: '使用 HTTP 检查的 Web 服务可用性和延迟监控。此插件是端口检查插件的专用版本。'
    },

    'memcached': {
        title: 'memcached',
        icon: '<i class="fas fa-database"></i>',
        info: '<b>memcached</b> 的性能指标。Memcached 是一个通用的分布式内存缓存系统。它通常用于通过在 RAM 中缓存数据和对象来加速动态数据库驱动的网站，以减少必须读取外部数据源（例如数据库或 API）的次数。'
    },

    'monit': {
        title: 'monit',
        icon: '<i class="fas fa-database"></i>',
        info: '<b>monit</b> 中的检查状态。Monit 是一个用于管理和监控 Unix 系统上的进程、程序、文件、目录和文件系统的实用程序。Monit进行自动维护和维修，并可以在错误情况下执行有意义的因果操作。'
    },

    'mysql': {
        title: 'MySQL',
        icon: '<i class="fas fa-database"></i>',
        info: '<b>mysql</b>（开源关系数据库管理系统 （RDBMS））的性能指标。'
    },

    'postgres': {
        title: 'Postgres',
        icon: '<i class="fas fa-database"></i>',
        info: '<b>PostgresSQL</b>（对象关系数据库 （ORDBMS））的性能指标。'
    },

    'redis': {
        title: 'Redis',
        icon: '<i class="fas fa-database"></i>',
        info: '<b>Redis</b> 的性能指标。Redis（REmote DIctionary Server）是一个实现数据结构服务器的软件项目。它是开源的、网络的、内存中的，并存储具有可选持久性的密钥。'
    },

    'rethinkdbs': {
        title: 'RethinkDB',
        icon: '<i class="fas fa-database"></i>',
        info: '<b>rethinkdb</b> 的性能指标。RethinkDB 是第一个为实时应用程序构建的开源可扩展数据库'
    },

    'retroshare': {
        title: 'RetroShare',
        icon: '<i class="fas fa-share-alt"></i>',
        info: '<b>RetroShare</b> 的性能指标。RetroShare 是用于加密文件共享、无服务器电子邮件、即时消息、在线聊天和 BBS 的开源软件，基于基于 GNU Privacy Guard （GPG） 构建的朋友对朋友网络。'
    },

    'ipfs': {
        title: 'IPFS',
        icon: '<i class="fas fa-folder-open"></i>',
        info: '星际文件系统 （IPFS） 的性能指标，IPFS 是一种内容可寻址的点对点超媒体分发协议。'
    },

    'phpfpm': {
        title: 'PHP-FPM',
        icon: '<i class="fas fa-eye"></i>',
        info: '<b>PHP-FPM</b> 的性能指标，是 PHP 的另一种 FastCGI 实现。'
    },

    'portcheck': {
        title: 'Port 检查',
        icon: '<i class="fas fa-heartbeat"></i>',
        info: '使用端口检查进行服务可用性和延迟监控。'
    },

    'postfix': {
        title: 'postfix',
        icon: '<i class="fas fa-envelope"></i>',
        info: undefined
    },

    'dovecot': {
        title: 'Dovecot',
        icon: '<i class="fas fa-envelope"></i>',
        info: undefined
    },

    'hddtemp': {
        title: 'HDD Temp',
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: undefined
    },

    'nginx': {
        title: 'nginx',
        icon: '<i class="fas fa-eye"></i>',
        info: undefined
    },

    'apache': {
        title: 'Apache',
        icon: '<i class="fas fa-eye"></i>',
        info: undefined
    },

    'lighttpd': {
        title: 'Lighttpd',
        icon: '<i class="fas fa-eye"></i>',
        info: undefined
    },

    'web_log': {
        title: 'web_log',
        icon: '<i class="fas fa-file-alt"></i>',
        info: '从服务器日志文件中提取的信息。<code>web_log</code>插件以增量方式解析服务器日志文件，以实时提供关键服务器性能指标的细分。对于 Web 服务器，可以选择使用扩展日志文件格式（对于 <code>nginx</code> 和 <code>apache</code>），为请求和响应提供计时信息和带宽。<code>web_log</code>插件也可以配置为提供每个 URL 模式的请求细分（检查 <a href=“https://github.com/netdata/netdata/blob/master/conf.d/python.d/web_log.conf” target=“_blank”>/<code>etc/netdata/python.d/web_log.conf</code></a>）。'
    },

    'named': {
        title: 'named',
        icon: '<i class="fas fa-tag"></i>',
        info: undefined
    },

    'squid': {
        title: 'squid',
        icon: '<i class="fas fa-exchange-alt"></i>',
        info: undefined
    },

    'nut': {
        title: 'UPS',
        icon: '<i class="fas fa-battery-half"></i>',
        info: undefined
    },

    'apcupsd': {
        title: 'UPS',
        icon: '<i class="fas fa-battery-half"></i>',
        info: undefined
    },

    'smawebbox': {
        title: 'Solar Power',
        icon: '<i class="fas fa-sun"></i>',
        info: undefined
    },

    'fronius': {
        title: 'Fronius',
        icon: '<i class="fas fa-sun"></i>',
        info: undefined
    },

    'stiebeleltron': {
        title: 'Stiebel Eltron',
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: undefined
    },

    'snmp': {
        title: 'SNMP',
        icon: '<i class="fas fa-random"></i>',
        info: undefined
    },

    'go_expvar': {
        title: 'Go - expvars',
        icon: '<i class="fas fa-eye"></i>',
        info: '有关运行 <a href=“https://golang.org/pkg/expvar/” target=“_blank”>expvar 包公开的 Go 应用程序的统计信息</a>。'
    },

    'chrony': {
        title: 'chrony',
        icon: '<i class="fas fa-clock"></i>',
        info: '有关系统时钟性能的 chronyd 参数。'
    },

    'couchdb': {
        title: 'CouchDB',
        icon: '<i class="fas fa-database"></i>',
        info: '<a href=“https://couchdb.apache.org/”>CouchDB 的性能指标<b>，CouchDB</a></b> 是基于 JSON 文档的开源数据库，具有 HTTP API 和多主复制功能。'
    },

    'beanstalk': {
        title: 'Beanstalkd',
        icon: '<i class="fas fa-tasks"></i>',
        info: '使用从 beanstalkc 中提取的数据提供有关 <b><a href=“http://kr.github.io/beanstalkd/”>beanstalkd</a></b> 服务器以及该服务器上可用的任何管的统计信息。'
    },

    'rabbitmq': {
        title: 'RabbitMQ',
        icon: '<i class="fas fa-comments"></i>',
        info: '<a href=“https://www.rabbitmq.com/”>RabbitMQ 开源消息代理的性能数据<b></a></b>。'
    },

    'ceph': {
        title: 'Ceph',
        icon: '<i class="fas fa-database"></i>',
        info: '提供开源分布式存储系统 <a href=“http://ceph.com/”>ceph 集群服务器的统计信息<b></a></b>。'
    },

    'ntpd': {
        title: 'ntpd',
        icon: '<i class="fas fa-clock"></i>',
        info: '提供网络时间协议守护程序<b>内部变量的统计信息<a href=“http://www.ntp.org/”>ntpd可选</a></b>变量，包括配置的对等体（如果在模块配置中启用）。该模块显示性能指标，如 <b><a href=“http://doc.ntp.org/current-stable/ntpq.html”>ntpq（标准 NTP</a></b> 查询程序）所示，使用 NTP 模式 6 UDP 数据包与 NTP 服务器通信。'
    },

    'spigotmc': {
        title: 'Spigot MC',
        icon: '<i class="fas fa-eye"></i>',
        info: '提供 <a href=“https://www.spigotmc.org/”>Spigot Minecraft 服务器的基本性能统计信息<b></a></b>。'
    },

    'unbound': {
        title: 'Unbound',
        icon: '<i class="fas fa-tag"></i>',
        info: undefined
    },

    'boinc': {
        title: 'BOINC',
        icon: '<i class="fas fa-microchip"></i>',
        info: '提供 <a href=“http://boinc.berkeley.edu/”>BOINC 分布式计算客户端的任务计数<b></a></b>。'
    },

    'w1sensor': {
        title: '1-Wire Sensors',
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: '数据来源于<a href=“https://en.wikipedia.org/wiki/1-Wire”>1-Wire</a>传感器。 目前，温度传感器是自动检测的。'
    },

    'logind': {
        title: 'Logind',
        icon: '<i class="fas fa-user"></i>',
        info: undefined
    },

    'powersupply': {
        title: 'Power Supply',
        icon: '<i class="fas fa-battery-half"></i>',
        info: '各种系统电源的统计信息。从 <a href=“https://www.kernel.org/doc/Documentation/power/power_supply_class.txt”>Linux 电源类收集的数据</a>。'
    }
};


// ----------------------------------------------------------------------------
// submenus

// information to be shown, just below each submenu

// information about the submenus
netdataDashboard.submenu = {
    'web_log.squid_bandwidth': {
        title: '频宽',
        info: 'squid 响应（<code>发送</code>）的带宽。此图表可能会出现异常峰值，因为带宽是在服务器保存日志行时考虑的，即使提供日志行所需的时间跨度较长。我们建议使用 QoS（例如 <a href=“http://firehol.org/#fireqos” target=“_blank”>FireQOS）</a>来准确计算服务器带宽。'
    },

    'web_log.squid_responses': {
        title: '回应',
        info: '与 squid 发送的响应相关的信息。'
    },

    'web_log.squid_requests': {
        title: '请求',
        info: '与 squid 收到的请求相关的信息。'
    },

    'web_log.squid_hierarchy': {
        title: 'hierarchy',
        info: '用于处理请求的 squid 层次结构的性能指标。'
    },

    'web_log.squid_squid_transport': {
        title: 'transport'
    },

    'web_log.squid_squid_cache': {
        title: '快取',
        info: 'squid 缓存性能的性能指标。'
    },

    'web_log.squid_timings': {
        title: 'timings',
        info: 'squid 请求的持续时间. 可能会报告不切实际的峰值，因为 squid 会在请求完成时记录请求的总时间。特别是对于 HTTPS，客户端从代理获取隧道并直接与上游服务器交换请求，因此 squid 无法评估单个请求并报告隧道打开的总时间。'
    },

    'web_log.squid_clients': {
        title: 'clients'
    },

    'web_log.bandwidth': {
        info: '请求（<code>已接收</code>）和响应（<code>已发送</code>）的带宽。<code>Received</code> 需要扩展日志格式（如果没有它，Web 服务器日志将不包含此信息）。此图表可能会出现异常峰值，因为带宽是在 Web 服务器保存日志行时考虑的，即使提供日志行所需的时间跨度更长。我们建议使用 QoS（例如 <a href=“http://firehol.org/#fireqos” target=“_blank”>FireQOS）</a>来准确计算 Web 服务器带宽。'
    },

    'web_log.urls': {
        info: '<a href=“https://github.com/netdata/netdata/blob/master/conf.d/python.d/web_log.conf” target=“_blank”><code>/etc/netdata/python.d/web_log.conf</code> 中定义的每个 <code>URL 模式</code>的请求数</a>。此图表计算与定义的 URL 模式匹配的所有请求，与 Web 服务器响应代码（即成功和不成功）无关。'
    },

    'web_log.clients': {
        info: '显示访问 Web 服务器的唯一客户端 IP 数量的图表。'
    },

    'web_log.timings': {
        info: 'Web 服务器响应时间 - Web 服务器准备和响应请求所需的时间。这需要扩展的日志格式，其含义是特定于 Web 服务器的。对于大多数 Web 服务器，这说明了从接收完整请求到发送响应的最后一个字节的时间。因此，它包括响应的网络延迟，但不包括请求的网络延迟。'
    },

    'mem.ksm': {
        title: 'deduper (ksm)',
        info: 'Kernel Same-page Merging (KSM) 效能监视，经由读取 <code>/sys/kernel/mm/ksm/</code> 下的档案而来。KSM 是在 Linux 核心 (自 2.6.32 版起) 内含的一种节省内存使用率重复资料删除功能。)。 KSM 服务程序 ksmd 会定期扫描内存区域，寻找正有资料要更新进来且相同资料存在的分页。KSM 最初是从 KVM 专案开发中而来，利用这种共用相同资料的机制，即可以让更多的虚拟机器放到内存中。另外，对许多会产生同样内容的应用程序来说，这个功能是相当有效益的。'
    },

    'mem.hugepages': {
        info: 'Hugepages 是一项功能，它允许内核利用现代硬件架构的多种页面大小功能。内核创建多个虚拟内存页，从物理 RAM 和交换映射。CPU 体系结构中有一种称为“转换后备缓冲区”（TLB） 的机制，用于管理虚拟内存页到实际物理内存地址的映射。TLB 是有限的硬件资源，因此使用具有默认页面大小的大量物理内存会消耗 TLB 并增加处理开销。通过使用 Huge Pages，内核能够创建更大尺寸的页面，每个页面消耗 TLB 中的单个资源。大页面固定在物理 RAM 上，无法交换/分页。'
    },

    'mem.numa': {
        info: 'Non-Uniform Memory Access (NUMA) 是一种内存存取分隔设计，在 NUMA 之下，一个处理器存取自己管理的的内存，将比非自己管理的内存 (另一个处理器所管理的内存或是共用内存) 具有更快速的效能。在 <a href="https://www.kernel.org/doc/Documentation/numastat.txt" target="_blank">Linux 核心文件</a> 中有详细说明这些指标。'
    },

    'ip.ecn': {
        info: '<a href="https://en.wikipedia.org/wiki/Explicit_Congestion_Notification" target="_blank">显式拥塞通知 （ECN）</a> 是一种 TCP 扩展，允许在不丢弃数据包的情况下进行网络拥塞的端到端通知。ECN 是一项可选功能，当底层网络基础设施也支持它时，可以在两个启用 ECN 的端点之间使用。'
    },

    'netfilter.conntrack': {
        title: '连接跟踪器(Connection tracker)',
        info: 'Netfilter connection tracker 效能指标。Connection tracker 会追踪这台主机上所有的连接，包括流入与流出。工作原理是将所有开启的连接都储存到资料库，以追踪网络、位址转换与连接目标。'
    },

    'netfilter.nfacct': {
        title: '带宽计费(bandwidth accounting)',
        info: 'The following information is read using the <code>nfacct.plugin</code>.'
    },

    'netfilter.synproxy': {
        title: 'DDoS 保护',
        info: 'DDoS 防护性能指标。<a href=“https://github.com/firehol/firehol/wiki/Working-with-SYNPROXY” target=“_blank”>SYNPROXY</a> 是一个 TCP SYN 数据包代理。它用于保护任何 TCP 服务器（如 Web 服务器）免受 SYN 洪水和类似的 DDoS 攻击。它是 Linux 内核中的 netfilter 模块（自 3.12 版起）。它经过优化，可利用所有可用的 CPU，每秒处理数百万个数据包，而无需在连接之间进行任何并发锁定。它可以用于任何类型的TCP流量（甚至是加密的），因为它不会干扰内容本身。'
    },

    'ipfw.dynamic_rules': {
        title: '动态规则(dynamic rules)',
        info: '动态规则的数量，由相应的有状态防火墙规则创建。'
    },

    'system.softnet_stat': {
        title: 'softnet',
        info: function (os) {
            if (os === 'linux')
                return '与网络接收工作相关的 CPU SoftIRQ 的统计信息。每个 CPU 内核的细分可以在 <a href=“#menu_cpu_submenu_softnet_stat”>CPU / softnet statistics 中找到</a>。<b>processed</b> states 处理的数据包数，<b>dropping</b> 是由于网络设备积压已满而丢弃的数据包数（要在 Linux 上修复它们，请使用 sysctl 增加<code>net.core.netdev_max_backlog</code>），<b>squeezed</b> 是由于网络设备预算用完而丢弃的数据包数（要在 Linux 上修复它们，请使用 <code>sysctl</code> 增加<code>net.core.netdev_budget</code>和/或<code>net.core.netdev_budget_usecs</code> <code></code>).有关识别和解决网络驱动程序相关问题的更多信息，请参见 <a href=“https://access.redhat.com/sites/default/files/attachments/20150325_network_performance_tuning.pdf” target=“_blank”>Red Hat Enterprise Linux Network Performance Tuning Guide</a>。';
            else
                return '与网络接收工作相关的 CPU SoftIRQ 的统计信息。';
        }
    },

    'cpu.softnet_stat': {
        title: 'softnet',
        info: function (os) {
            if (os === 'linux')
                return '与网络接收工作相关的每个 CPU 内核 SoftIRQ 的统计信息。所有 CPU 内核的总数可以在 <a href=“#menu_system_submenu_softnet_stat”中找到>系统/软网络统计信息</a>。<b>processed</b> states 处理的数据包数，<b>dropping</b> 是由于网络设备积压已满而丢弃的数据包数（要在 Linux 上修复它们，请使用 sysctl 增加<code>net.core.netdev_max_backlog</code>），<b>squeezed</b> 是由于网络设备预算用完而丢弃的数据包数（要在 Linux 上修复它们，请使用 <code>sysctl</code> 增加<code>net.core.netdev_budget</code>和/或<code>net.core.netdev_budget_usecs</code> <code></code>).有关识别和解决网络驱动程序相关问题的更多信息，请参见 <a href=“https://access.redhat.com/sites/default/files/attachments/20150325_network_performance_tuning.pdf” target=“_blank”>Red Hat Enterprise Linux Network Performance Tuning Guide</a>。';
            else
                return '与网络接收工作相关的每个 CPU 内核 SoftIRQ 的统计信息。所有 CPU 内核的总数可以在 <a href=“#menu_system_submenu_softnet_stat”中找到>系统/软网络统计信息</a>。';
        }
    },

    'go_expvar.memstats': {
        title: '内存统计信息(memory statistics)',
        info: 'Go 运行时内存统计信息。请参见 <a href=“https://golang.org/pkg/runtime/#MemStats” target=“_blank”>runtime。MemStats</a> 文档，了解有关每个图表和值的详细信息。'
    },

    'couchdb.dbactivity': {
        title: '数据库活动(db activity)',
        info: '整个服务器的数据库读取和写入。这包括任何外部 HTTP 流量，以及在集群中执行的内部复制流量，以确保节点一致性。'
    },

    'couchdb.httptraffic': {
        title: 'HTTP 流量明细',
        info: '所有 HTTP 流量，按请求类型（<tt>GET</tt>、<tt>PUT、</tt><tt>POST</tt> 等）和响应状态代码（<tt>200、201</tt>、<tt>4xx</tt> 等）<br/>细分 <tt></tt><br/>此处的任何 <tt>5xx</tt> 错误都表明可能存在 CouchDB 错误;有关详细信息，请查看日志文件。'
    },

    'couchdb.ops': {
        title: '服务器操作'
    },

    'couchdb.perdbstats': {
        title: '每个数据库统计',
        info: '每个数据库的统计信息。这包括每个数据库的 <a href=“http://docs.couchdb.org/en/latest/api/database/common.html#get--db”>3 大小图</a>：活动（数据库中实时数据的大小）、外部（数据库内容的未压缩大小）和文件（磁盘上文件的大小，不包括任何视图和索引）。它还包括每个数据库的文档数和已删除文档数。'
    },

    'couchdb.erlang': {
        title: 'Erlang统计数据',
        info: '有关托管 CouchDB 的 Erlang VM 状态的详细信息。这些仅适用于高级用户。峰值消息队列 （>10e6） 的高值通常表示存在过载情况。'
    },

    'ntpd.system': {
        title: '系统',
        info: '系统变量的统计信息，如 readlist billboard <code>ntpq -c rl</code> 所示。系统变量的关联 ID 为零，也可以显示在 readvar billboard <code>ntpq -c “rv 0”</code> 中。这些变量用于 <a href=“http://doc.ntp.org/current-stable/discipline.html”>时钟纪律算法</a>，以计算最低和最稳定的偏移量。'
    },

    'ntpd.peers': {
        title: 'peers',
        info: '在 /<code>etc/ntp.conf</code> 中配置的每个对等节点变量的统计信息，如 readvar billboard ntpq -c “<code>rv &lt;association&gt;</code>” 所示，而每个对等节点被分配一个非零关联 ID，如 <code>ntpq -c “apeers”</code> 所示。该模块会定期扫描新的/更改的对等体（默认：每 60 秒扫描一次）。<b>NTPD</b> 从可用的对等体中选择最佳对等体来同步时钟。至少需要 3 个对等方才能正确识别最佳对等方。'
    }
};


// ----------------------------------------------------------------------------
// chart

// information works on the context of a chart
// Its purpose is to set:
//
// info: the text above the charts
// heads: the representation of the chart at the top the subsection (second level menu)
// mainheads: the representation of the chart at the top of the section (first level menu)
// colors: the dimension colors of the chart (the default colors are appended)
// height: the ratio of the chart height relative to the default
//

var cgroupCPULimitIsSet = 0;
var cgroupMemLimitIsSet = 0;

netdataDashboard.context = {
    'system.cpu': {
        info: function (os) {
            void(os);
            return 'CPU 使用率总表 (全部核心)。 当数值为 100% 时，表示您的 CPU 非常忙碌没有闲置空间。您可以在 <a href="#menu_cpu">CPU</a> 区段及以及 <a href="#menu_apps">应用程序</a> 区段深入了解每个核心与应用程序的使用情况。'
                + netdataDashboard.sparkline('<br/>请特别关注 <b>iowait</b> ', 'system.cpu', 'iowait', '%', '，如果它一直处于较高的情况，这表示您的磁盘是效能瓶颈，您的系统效能会明显降低。')
                + netdataDashboard.sparkline('<br/>另一个重要的指标是 <b>softirq</b> ', 'system.cpu', 'softirq', '%', '，若这个数值持续在较高的情况，很有可能是您的网络驱动部份有问题。');
        },
        valueRange: "[0, 100]"
    },

    'system.load': {
        info: '目前系统负载，也就是指 CPU 使用情况或正在等待系统资源 (通常是 CPU 与磁盘)。这三个指标分别是 1、5、15 分钟。系统每 5 秒会计算一次。更多的资讯可以参阅 <a href="https://en.wikipedia.org/wiki/Load_(computing)" target="_blank">维基百科</a> 说明。',
        height: 0.7
    },

    'system.io': {
        info: function (os) {
            var s = '磁盘 I/O 总计, 包含所有的实体磁盘。您可以在 <a href="#menu_disk">磁盘</a> 区段查看每一个磁盘的详细资讯，也可以在 <a href="#menu_apps">应用程序</a> 区段了解每一支应用程序对于磁盘的使用情况。';

            if (os === 'linux')
                return s + ' 实体磁盘指的是 <code>/sys/block</code> 中有列出，但是没有在 <code>/sys/devices/virtual/block</code> 的所有磁盘。';
            else
                return s;
        }
    },

    'system.pgpgio': {
        info: '从内存分页到磁盘的 I/O。通常是这个系统所有磁盘的总 I/O。'
    },

    'system.swapio': {
        info: '所有的 Swap I/O. (netdata 会合并显示 <code>输入</code> 与 <code>输出</code>。如果图表中没有任何数值，则表示为 0。 - 您可以修改这一页的设定，让图表显示固定的维度。'
    },

    'system.pgfaults': {
        info: '所有的 Page 错误. <b>Major page faults</b> indicates that the system is using its swap. You can find which applications use the swap at the <a href="#menu_apps">Applications Monitoring</a> section.'
    },

    'system.entropy': {
        colors: '#CC22AA',
        info: '<a href="https://en.wikipedia.org/wiki/Entropy_(computing)" target="_blank">熵 (Entropy)</a>，主要是用在密码学的乱数集区 (<a href="https://en.wikipedia.org/wiki//dev/random" target="_blank">/dev/random</a>)。如果熵的集区为空，需要乱数的程序可能会导致执行变慢 (这取决于每个程序使用的介面)，等待集区补充。在理想情况下，有高度熵需求的系统应该要具备专用的硬体装置 (例如 TPM 装置)。您也可以安装纯软体的方案，例如 <code>haveged</code>，通常这些方案只会使用在服务器上。'
    },

    'system.forks': {
        colors: '#5555DD',
        info: '建立新程序的数量。'
    },

    'system.intr': {
        colors: '#DD5555',
        info: 'CPU 中断的总数。透过检查 <code>system.interrupts</code>，得知每一个中断的细节资讯。在 <a href="#menu_cpu">CPU</a> 区段提供每一个 CPU 核心的中断情形。'
    },

    'system.interrupts': {
        info: 'CPU 中断的细节。在 <a href="#menu_cpu">CPU</a> 区段中，依据每个 CPU 核心分析中断。'
    },

    'system.softirqs': {
        info: 'CPU softirqs 的细节。在 <a href="#menu_cpu">CPU</a> 区段中，依据每个 CPU 核心分析 softirqs。'
    },

    'system.processes': {
        info: '系统程序。<b>running</b> 显示正在 CPU 中的程序。<b>Blocked</b> 显示目前被挡下无法进入 CPU 执行的程序，例如：正在等待磁盘完成动作，才能继续。'
    },

    'system.active_processes': {
        info: '所有的系统程序。'
    },

    'system.ctxt': {
        info: '<a href="https://en.wikipedia.org/wiki/Context_switch" target="_blank">Context Switches</a>，指 CPU 从一个程序、工作或是执行绪切换到另一个程序、工作或是执行绪。如果有许多程序或执行绪需要执行，但可以使用的 CPU 核心很少，即表示系统将会进行更多的 context switching 用来平衡它们所使用的 CPU 资源。这个过程需要大量的运算，因此 context switches 越多，整个系统就会越慢。'
    },

    'system.idlejitter': {
        info: 'Idle jitter 是由 netdata 计算而得。当一个执行绪要求睡眠 (Sleep) 时，需要几个微秒的时间。当系统要唤醒它时，会量测它用了多少个微秒的时间。要求睡眠与实际睡眠时间的差异就是 <b>idle jitter</b>。这个数字在即时的环境中非常有用，因为 CPU jitter 将会影响服务的品质 (例如 VoIP media gateways)。'
    },

    'system.net': {
        info: function (os) {
            var s = '所有实体网络介面的总频宽。不包含 <code>lo</code>、VPN、网络桥接、IFB 装置、介面聚合 (Bond).. 等。将合并显示实体网络介面的频宽使用情况。';

            if (os === 'linux')
                return s + ' 实体网络介面是指在 <code>/proc/net/dev</code> 有列出，但不在 <code>/sys/devices/virtual/net</code> 里。';
            else
                return s;
        }
    },

    'system.ip': {
        info: 'IP 总流量。'
    },

    'system.ipv4': {
        info: 'IPv4 总流量。'
    },

    'system.ipv6': {
        info: 'IPv6 总流量。'
    },

    'system.ram': {
        info: '系统随机存取内存 (也就是实体内存) 使用情况。'
    },

    'system.swap': {
        info: '系统交换空间 (Swap) 内存使用情况。Swap 空间会在实体内存 (RAM) 已满的情况下使用。当系统内存已满但还需要使用更多内存情况下，系统内存中的比较没有异动的 Page 将会被移动到 Swap 空间 (通常是磁盘、磁盘分割区或是档案)。'
    },

    // ------------------------------------------------------------------------
    // CPU charts

    'cpu.cpu': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, 100]"
    },

    'cpu.interrupts': {
        commonMin: true,
        commonMax: true
    },

    'cpu.softirqs': {
        commonMin: true,
        commonMax: true
    },

    'cpu.softnet_stat': {
        commonMin: true,
        commonMax: true
    },

    // ------------------------------------------------------------------------
    // MEMORY

    'mem.ksm_savings': {
        heads: [
            netdataDashboard.gaugeChart('Saved', '12%', 'savings', '#0099CC')
        ]
    },

    'mem.ksm_ratios': {
        heads: [
            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Savings"'
                    + ' data-units="percentage %"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'mem.pgfaults': {
        info: '<a href=“https://en.wikipedia.org/wiki/Page_fault” target=“_blank”>page 错误</a>是一种称为陷阱的中断，当正在运行的程序访问映射到虚拟地址空间的内存页时，计算机硬件会引发这种中断，但实际上并未加载到主内存中。如果在生成错误时页面已加载到内存中，但未在内存管理单元中标记为正在加载到内存中，则称为<b>次要</b>或软页面错误。当系统需要从磁盘或交换内存加载内存页时，会生成<b>主要</b>页面错误。'
    },

    'mem.committed': {
        colors: NETDATA.colors[3],
        info: 'Committed 内存，是指程序分配到的所有内存总计。'
    },

    'mem.available': {
        info: '可用内存是由核心估算而来，也就是使用者空间程序可以使用的 RAM 总量，而不会造成交换 (Swap) 发生。'
    },

    'mem.writeback': {
        info: '<b>Dirty</b> 是等待写入磁盘的内存量。<b>Writeback</b> 是指有多少内存内容被主动写入磁盘。'
    },

    'mem.kernel': {
        info: '内核使用的内存总量。<b>Slab</b> 是内核用于缓存数据结构以供自己使用的内存量。<b>KernelStack</b> 是为内核完成的每个任务分配的内存量。<b>PageTables</b> 是判定到页表最低级别的内存量（页表用于将虚拟地址转换为物理内存地址）。<b>VmallocUsed</b> 是用作虚拟地址空间的内存量。'
    },

    'mem.slab': {
        info: '<b>可回收</b>是内核可以重用的内存量。即使内核内存不足，也无法重用 <b>Unreclaimable</b>。'
    },

    'mem.hugepages': {
        info: '专用（或直接）HugePages 是为配置为利用大页面的应用程序保留的内存。大页面是<b>已使用的</b>内存，即使有可用的大页面可用。'
    },

    'mem.transparent_hugepages': {
        info: 'Transparent HugePages （THP） 支持具有大页面的虚拟内存，支持页面大小的自动升级和降级。它适用于匿名内存映射和 tmpfs/shmem 的所有应用程序。'
    },

    // ------------------------------------------------------------------------
    // network interfaces

    'net.drops': {
        info: '在网络接口级别丢弃的数据包。这些计数器与 <code>ifconfig</code> 报告的 <code>RX 丢弃</code>（入站）和 <code>TX 丢弃</code>（出站）相同。<b></b>由于 <a href=“#menu_system_submenu_softnet_stat”>softnet 积压溢出</a>、错误/无意的 VLAN 标记、未知或未注册的协议、服务器未配置 IPv6 时的 IPv6 帧，入站数据包可能会在网络接口级别丢弃。有关更多信息，请查看 <a href=“https://www.novell.com/support/kb/doc.php?id=7007165” target=“_blank”>本文档</a>。'
    },

    // ------------------------------------------------------------------------
    // IP

    'ip.inerrors': {
        info: '接收 IP 数据包时遇到的错误。 ' +
            '<code>noroutes</code> （<code>InNoRoutes</code>） 对由于没有发送路由而丢弃的数据包进行计数。' +
            '<code>截断</code> （<code>InTruncatedPkts</code>） 对由于数据报帧未携带足够数据而被丢弃的数据包进行计数。' +
            '<code>校验和</code> （<code>InCsumErrors</code>） 对因校验和错误而被丢弃的数据包进行计数。'
    },

    'ip.tcpmemorypressures': {
        info: '由于非致命的内存分配失败，套接字处于<b>内存压力</b>状态的次数（内核尝试通过减少发送缓冲区等来解决此问题）。'
    },

    'ip.tcpconnaborts': {
        info: 'TCP 连接中止。<b>baddata</b> （<code>TCPAbortOnData</code>） 发生在连接处于 <code>FIN_WAIT1</code> 并且内核收到的数据包的序列号超出了此连接的最后一个序列号时 - 内核以 <code>RST</code> 响应（关闭连接）。<b>userclosed</b> （<code>TCPAbortOnClose</code>） 当内核在已关闭的连接上接收数据并使用 <code>RST</code> 进行响应时发生。<b>nomemory</b> （TCPAbortOnMemory 当有太多孤立的套接字（未连接到 fd）并且内核必须断开连接时发生 - 有时它会发送 <code>RST</code>，有时它不会。 timeout （<code>TCPAbortOnTimeout</code>） 在连接 <b></b> 超时时发生。<code></code>当内核终止一个已经被应用程序关闭并徘徊足够长的套接字时，就会发生<b>徘徊</b> （<code>TCPAbortOnLinger</code>）。<b>失败</b> （<code>TCPAbortFailed</code>） 当内核尝试发送 <code>RST</code> 但由于没有可用内存而失败时发生。'
    },

    'ip.tcp_syn_queue': {
        info: '内核的 <b>SYN 队列</b>跟踪 TCP 握手，直到连接完全建立。当太多传入的 TCP 连接请求在半打开状态下挂起并且服务器未配置为回退到 SYN cookie* 时，它会溢出。溢出通常是由 SYN 洪水 DoS 攻击引起的（即有人发送大量 SYN 数据包，但从未完成握手）。<b>drops</b>（或 <code>TcpExtTCPReqQFullDrop</code>）是由于 SYN 队列已满且 SYN cookie 被禁用而丢弃的连接数。Cookie（或 <code>TcpExtTCPReqQFullDoCookies</code>）是由于 SYN 队列已满而发送的 SYN <b>Cookie</b> 数。'
    },

    'ip.tcp_accept_queue': {
        info: '内核的<b>接受队列</b>保存完全建立的 TCP 连接，等待侦听应用程序处理。<b>溢出</b>（或 <code>ListenOverflows</code>）是由于侦听应用程序的接收队列已满而无法处理的已建立连接数。<b>drops</b>（或 <code>ListenDrops</code>）是无法处理的传入连接数，包括 SYN 洪水、溢出、内存不足、安全问题、没有到目的地的路由、接收相关的 ICMP 消息、套接字广播或组播。'
    },


    // ------------------------------------------------------------------------
    // IPv4

    'ipv4.tcpsock': {
        info: '已建立的 TCP 连接数（称为 <code>CurrEstab</code>）。这是测量时已建立连接的快照（即，在同一迭代中建立的连接和断开连接不会影响此指标）。'
    },

    'ipv4.tcpopens': {
        info: '<b>active</b> 或 <code>ActiveOpens</code> 是此主机尝试的传出 TCP <b>连接</b>数。'
            + ' <b>passive</b> 或 <code>PassiveOpens</code> 是此主机接受的传入 TCP <b>连接</b>数。'
    },

    'ipv4.tcperrors': {
        info: '<code>InErrs</code> 是错误接收的 TCP 段数（包括报头太小、校验和错误、序列错误、错误数据包 - 对于 IPv4 和 IPv6）。'
            + ' <code>InCsumErrors</code> 是收到校验和错误的 TCP 段数（对于 IPv4 和 IPv6）。'
            + ' <code>RetransSegs</code> 是重新传输的 TCP 段数。'
    },

    'ipv4.tcphandshake': {
        info: '<code>EstabResets</code> 是已建立连接重置的数量（即从 <code>ESTABLISHED</code> 或 <code>CLOSE_WAIT</code> 直接转换为 <code>CLOSED</code> 的连接）。'
            + ' <code>OutRsts</code> 是发送的 TCP 段数，并设置了 <code>RST</code> 标志（适用于 IPv4 和 IPv6）。'
            + ' <code>AttemptFails</code> 是 TCP 连接从 <code>SYN_SENT</code> 或 SYN_RECV 直接转换到 <code>CLOSED</code> 的次数，加上 TCP 连接从 <code>SYN_RECV</code> 直接转换到 <code>LISTEN</code> 的次数。<code></code>'
            + ' <code>TCPSynRetrans</code> 显示新出站 TCP 连接的重试次数，这可能表示远程主机上存在常规连接问题或积压。'
    },

    // ------------------------------------------------------------------------
    // APPS

    'apps.cpu': {
        height: 2.0
    },

    'apps.mem': {
        info: '应用程序使用的实际内存 （RAM）。这不包括共享内存。'
    },

    'apps.vmem': {
        info: '应用程序分配的虚拟内存。有关详细信息，请查看 <a href=“https://github.com/netdata/netdata/tree/master/daemon#virtual-memory” target=“_blank”>本文</a>。'
    },

    'apps.preads': {
        height: 2.0
    },

    'apps.pwrites': {
        height: 2.0
    },

    // ------------------------------------------------------------------------
    // USERS

    'users.cpu': {
        height: 2.0
    },

    'users.mem': {
        info: '每个用户使用的实际内存 （RAM）。这不包括共享内存。'
    },

    'users.vmem': {
        info: '为每个用户分配的虚拟内存。有关详细信息，请查看 <a href=“https://github.com/netdata/netdata/tree/master/daemon#virtual-memory” target=“_blank”>本文</a>。'
    },

    'users.preads': {
        height: 2.0
    },

    'users.pwrites': {
        height: 2.0
    },

    // ------------------------------------------------------------------------
    // GROUPS

    'groups.cpu': {
        height: 2.0
    },

    'groups.mem': {
        info: '每个用户组使用的实际内存 （RAM）。这不包括共享内存。'
    },

    'groups.vmem': {
        info: '为每个用户组分配的虚拟内存。有关详细信息，请查看 <a href=“https://github.com/netdata/netdata/tree/master/daemon#virtual-memory” target=“_blank”>本文</a>。'
    },

    'groups.preads': {
        height: 2.0
    },

    'groups.pwrites': {
        height: 2.0
    },

    // ------------------------------------------------------------------------
    // NETWORK QoS

    'tc.qos': {
        heads: [
            function (os, id) {
                void(os);

                if (id.match(/.*-ifb$/))
                    return netdataDashboard.gaugeChart('Inbound', '12%', '', '#5555AA');
                else
                    return netdataDashboard.gaugeChart('Outbound', '12%', '', '#AA9900');
            }
        ]
    },

    // ------------------------------------------------------------------------
    // NETWORK INTERFACES

    'net.net': {
        mainheads: [
            function (os, id) {
                void(os);
                if (id.match(/^cgroup_.*/)) {
                    var iface;
                    try {
                        iface = ' ' + id.substring(id.lastIndexOf('.net_') + 5, id.length);
                    }
                    catch (e) {
                        iface = '';
                    }
                    return netdataDashboard.gaugeChart('Received' + iface, '12%', 'received');
                }
                else
                    return '';
            },
            function (os, id) {
                void(os);
                if (id.match(/^cgroup_.*/)) {
                    var iface;
                    try {
                        iface = ' ' + id.substring(id.lastIndexOf('.net_') + 5, id.length);
                    }
                    catch (e) {
                        iface = '';
                    }
                    return netdataDashboard.gaugeChart('Sent' + iface, '12%', 'sent');
                }
                else
                    return '';
            }
        ],
        heads: [
            function (os, id) {
                void(os);
                if (!id.match(/^cgroup_.*/))
                    return netdataDashboard.gaugeChart('Received', '12%', 'received');
                else
                    return '';
            },
            function (os, id) {
                void(os);
                if (!id.match(/^cgroup_.*/))
                    return netdataDashboard.gaugeChart('Sent', '12%', 'sent');
                else
                    return '';
            }
        ]
    },

    // ------------------------------------------------------------------------
    // NETFILTER

    'netfilter.sockets': {
        colors: '#88AA00',
        heads: [
            netdataDashboard.gaugeChart('Active Connections', '12%', '', '#88AA00')
        ]
    },

    'netfilter.new': {
        heads: [
            netdataDashboard.gaugeChart('New Connections', '12%', 'new', '#5555AA')
        ]
    },

    // ------------------------------------------------------------------------
    // DISKS

    'disk.util': {
        colors: '#FF5588',
        heads: [
            netdataDashboard.gaugeChart('使用率', '12%', '', '#FF5588')
        ],
        info: '磁盘利用率衡量磁盘忙于处理某些事情的时间量。这与它的性能无关。100% 表示系统在磁盘上始终具有出色的操作。请记住，根据磁盘的底层技术，此处的 100% 可能表示拥塞，也可能不表示拥塞。'
    },

    'disk.backlog': {
        colors: '#0099CC',
        info: '积压工作 （backlog） 指示挂起的磁盘操作的持续时间。在每个 I/O 事件中，系统都会将自上次更新此字段以来执行 I/O 所花费的时间乘以待处理操作的数量。虽然不准确，但此指标可以指示正在进行的操作的预期完成时间。'
    },

    'disk.io': {
        heads: [
            netdataDashboard.gaugeChart('读取', '12%', 'reads'),
            netdataDashboard.gaugeChart('写入', '12%', 'writes')
        ],
        info: '磁盘传输资料的总计。'
    },

    'disk.ops': {
        info: '已完成的磁盘 I/O operations。提醒：实际上的 operations 数量可能更高，因为系统能够将它们互相合并 (详见 operations 图表)。'
    },

    'disk.qops': {
        info: '当前正在进行的 I/O 操作。此指标是快照 - 它不是上一个时间间隔的平均值。'
    },

    'disk.iotime': {
        height: 0.5,
        info: '所有已完成的 I/O 操作的持续时间之和。如果磁盘能够并行执行 I/O 操作，则此数字可能会超过间隔。'
    },
    'disk.mops': {
        height: 0.5,
        info: '合并的磁盘操作数。系统能够合并相邻的 I/O 操作，例如，两个 4KB 的读取可以在提供给磁盘之前变成一个 8KB 的读取。'
    },
    'disk.svctm': {
        height: 0.5,
        info: '已完成 I/O 操作的平均服务时间。此衡量指标是使用磁盘的总繁忙时间和已完成的操作数计算得出的。如果磁盘能够执行多个并行操作，则报告的平均服务时间将具有误导性。'
    },
    'disk.avgsz': {
        height: 0.5,
        info: 'I/O operation 平均大小。'
    },
    'disk.await': {
        height: 0.5,
        info: '对要提供服务的设备发出 I/O 请求平均时间。这包含了请求在伫列中所花费的时间以及实际提供服务的时间。'
    },

    'disk.space': {
        info: '磁盘空间使用率。系统会自动为 root 使用者做保留，以防止 root 使用者使用过多。'
    },
    'disk.inodes': {
        info: '索引节点（或索引节点）是文件系统对象（例如文件和目录）。在许多类型的文件系统实现中，最大索引节点数在创建文件系统时是固定的，从而限制了文件系统可以容纳的最大文件数。设备可能会用完 inode。发生这种情况时，即使可能有可用空间，也无法在设备上创建新文件。'
    },

    'mysql.net': {
        info: '发送到 mysql 客户端 （<strong>out</strong>） 和从 mysql 客户端接收 （<strong>in</strong>） 的数据量。'
    },

    // ------------------------------------------------------------------------
    // MYSQL

    'mysql.queries': {
        info: '服务器执行的语句数。<ul>' +
            '<li><strong>query</strong> 对存储的 SQL 程序中执行的语句进行计数。</li>' +
            '<li><strong>questions</strong> 计算 MySQL 客户端发送到 MySQL 服务器的语句。</li>' +
            '<li><strong>慢查询</strong>统计执行时间超过 <a href=“http://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_long_query_time” target=“_blank”>long_query_time 秒的语句数</a>。' +
            ' 有关慢查询的更多信息，请查看 mysql <a href=“http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html” target=“_blank”>slow 查询日志</a>。</li>' +
            '</ul>'
    },

    'mysql.handlers': {
        info: 'mysql 内部处理程序的用法。这张图表提供了关于mysql服务器实际在做什么的非常好的见解。' +
            ' （如果图表没有显示所有这些维度，那是因为它们为零 - 从仪表板设置中将<strong>要显示哪些维度设置为</strong><strong>全部</strong>，甚至呈现零值）<ul>' +
            '<li><strong>commit</strong>，内部 <a href=“http://dev.mysql.com/doc/refman/5.7/en/commit.html” target=“_blank”>COMMIT 语句的数量</a>。</li>' +
            '<li><strong>delete</strong>，从表中删除行的次数。</li>' +
            '<li><strong>prepare</strong>，用于两阶段提交操作的准备阶段的计数器。</li>' +
            '<li><strong>Read First</strong>，读取索引中第一个条目的次数。较高的值表示服务器正在执行大量完整索引扫描;例如，SELECT col1 <strong>FROM foo</strong>，并索引 col1。</li>' +
            '<li><strong>read key</strong>, 基于键读取行的请求数。如果此值较高，则表明已为查询正确编制了表索引。</li>' +
            '<li><strong>read next</strong>, 按键顺序读取下一行的请求数。如果要查询具有范围约束的索引列，或者正在执行索引扫描，则此值将递增。</li>' +
            '<li><strong>read prev</strong>, 按键顺序读取上一行的请求数。这种读取方法主要用于优化 <strong>ORDER BY ...DESC</strong>的。</li>' +
            '<li><strong>read rnd</strong>, 基于固定位置读取行的请求数。较高的值表示您正在执行大量需要对结果进行排序的查询。您可能有很多查询需要MySQL扫描整个表，或者您的联接不能正确使用键。</li>' +
            '<li><strong>read rnd next</strong>, 读取数据文件中下一行的请求数。如果要进行大量表扫描，则此值较高。通常，这表明您的表未正确编制索引，或者您的查询不是为了利用您拥有的索引而编写的。</li>' +
            '<li><strong>rollback</strong>, 存储引擎执行回滚操作的请求数。</li>' +
            '<li><strong>savepoint</strong>, 存储引擎放置保存点的请求数。</li>' +
            '<li><strong>savepoint rollback</strong>, 存储引擎回滚到保存点的请求数。</li>' +
            '<li><strong>update</strong>, 更新表中某一行的请求数。</li>' +
            '<li><strong>write</strong>, 在表中插入行的请求数。</li>' +
            '</ul>'
    },

    'mysql.table_locks': {
        info: 'MySQL表锁计数器： <ul>' +
            '<li><strong>immediate</strong>, 可以立即授予表锁请求的次数。</li>' +
            '<li><strong>waited</strong>, 无法立即批准表锁请求且需要等待的次数。如果此值很高并且存在性能问题，则应首先优化查询，然后拆分一个或多个表或使用复制。</li>' +
            '</ul>'
    },

    // ------------------------------------------------------------------------
    // POSTGRESQL


    'postgres.db_stat_blks': {
        info: '阻止从磁盘或缓存读取数据。<ul>' +
            '<li><strong>blks_read:</strong> 此数据库中读取的磁盘块数。</li>' +
            '<li><strong>blks_hit:</strong> 在缓冲区缓存中已经找到磁盘块的次数，因此不需要读取（这仅包括 PostgreSQL 缓冲区缓存中的命中，不包括操作系统的文件系统缓存）</li>' +
            '</ul>'
    },
    'postgres.db_stat_tuple_write': {
        info: '<ul><li>插入/更新/删除的行数。</li>' +
            '<li><strong>conflicts:</strong> 由于与此数据库中的恢复冲突而取消的查询数。（冲突仅在备用服务器上发生;有关详细信息，请参见 <a href=“https://www.postgresql.org/docs/10/static/monitoring-stats.html#PG-STAT-DATABASE-CONFLICTS-VIEW” target=“_blank”>pg_stat_database_conflicts</a>。</li>' +
            '</ul>'
    },
    'postgres.db_stat_temp_bytes': {
        info: '可以在磁盘上创建临时文件，用于排序、哈希和临时查询结果。'
    },
    'postgres.db_stat_temp_files': {
        info: '<ul>' +
            '<li><strong>files:</strong> 查询创建的临时文件数。无论创建临时文件的原因如何（例如，排序或散列），都会计算所有临时文件。</li>' +
            '</ul>'
    },
    'postgres.archive_wal': {
        info: 'WAL 存档。<ul>' +
            '<li><strong>total:</strong> 文件总数。</li>' +
            '<li><strong>ready:</strong> WAL 正在等待存档。</li>' +
            '<li><strong>done:</strong> WAL 已成功存档。 ' +
            'Ready WAL 可以指示archive_command出错，请参阅 <a href=“https://www.postgresql.org/docs/current/static/continuous-archiving.html” target=“_blank”>Continuous Archiving and Point-in-Time Recovery</a>。</li>' +
            '</ul>'
    },
    'postgres.checkpointer': {
        info: '检查点数。<ul>' +
            '<li><strong>scheduled:</strong> 当达到checkpoint_timeout时。</li>' +
            '<li><strong>requested:</strong> 当达到max_wal_size时。</li>' +
            '</ul>' +
            '有关更多信息，请参阅 <a href=“https://www.postgresql.org/docs/current/static/wal-configuration.html” target=“_blank”>WAL 配置</a>。'
    },
    'postgres.autovacuum': {
        info: 'PostgreSQL 数据库需要定期维护，称为清空。对于许多安装，让 autovacuum 守护程序执行清空就足够了。 ' +
            '有关更多信息，请参见 <a href=“https://www.postgresql.org/docs/current/static/routine-vacuuming.html#AUTOVACUUM” target=“_blank”>Autovacuum 守护程序</a>。'
    },
    'postgres.standby_delta': {
        info: '流式复制增量。<ul>' +
            '<li><strong>sent_delta:</strong> 发送到备用数据库的复制增量。</li>' +
            '<li><strong>write_delta:</strong> 此备用数据库写入磁盘的复制增量。</li>' +
            '<li><strong>flush_delta:</strong> 此备用服务器刷新到磁盘的复制增量。</li>' +
            '<li><strong>replay_delta:</strong> 复制增量重播到此备用服务器上的数据库中。</li>' +
            '</ul>' +
            '有关详细信息，请参阅 <a href=“https://www.postgresql.org/docs/current/static/warm-standby.html#SYNCHRONOUS-REPLICATION” target=“_blank”>同步复制</a>。'
    },
    'postgres.replication_slot': {
        info: '复制槽文件。<ul>' +
            '<li><strong>wal_keeped:</strong> 每个复制槽保留的 WAL 文件。</li>' +
            '<li><strong>pg_replslot_files:</strong> pg_replslot中存在的文件。</li>' +
            '</ul>' +
            '有关详细信息，请参阅 <a href=“https://www.postgresql.org/docs/current/static/warm-standby.html#STREAMING-REPLICATION-SLOTS” target=“_blank”>复制槽</a>。'
    },


    // ------------------------------------------------------------------------
    // APACHE

    'apache.connections': {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart('Connections', '12%', '', NETDATA.colors[4])
        ]
    },

    'apache.requests': {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart('Requests', '12%', '', NETDATA.colors[0])
        ]
    },

    'apache.net': {
        colors: NETDATA.colors[3],
        mainheads: [
            netdataDashboard.gaugeChart('Bandwidth', '12%', '', NETDATA.colors[3])
        ]
    },

    'apache.workers': {
        mainheads: [
            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="busy"'
                    + ' data-append-options="percentage"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Workers Utilization"'
                    + ' data-units="percentage %"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'apache.bytesperreq': {
        colors: NETDATA.colors[3],
        height: 0.5
    },

    'apache.reqpersec': {
        colors: NETDATA.colors[4],
        height: 0.5
    },

    'apache.bytespersec': {
        colors: NETDATA.colors[6],
        height: 0.5
    },


    // ------------------------------------------------------------------------
    // LIGHTTPD

    'lighttpd.connections': {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart('Connections', '12%', '', NETDATA.colors[4])
        ]
    },

    'lighttpd.requests': {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart('Requests', '12%', '', NETDATA.colors[0])
        ]
    },

    'lighttpd.net': {
        colors: NETDATA.colors[3],
        mainheads: [
            netdataDashboard.gaugeChart('Bandwidth', '12%', '', NETDATA.colors[3])
        ]
    },

    'lighttpd.workers': {
        mainheads: [
            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="busy"'
                    + ' data-append-options="percentage"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="服务器利用率"'
                    + ' data-units="percentage %"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'lighttpd.bytesperreq': {
        colors: NETDATA.colors[3],
        height: 0.5
    },

    'lighttpd.reqpersec': {
        colors: NETDATA.colors[4],
        height: 0.5
    },

    'lighttpd.bytespersec': {
        colors: NETDATA.colors[6],
        height: 0.5
    },

    // ------------------------------------------------------------------------
    // NGINX

    'nginx.connections': {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart('Connections', '12%', '', NETDATA.colors[4])
        ]
    },

    'nginx.requests': {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart('Requests', '12%', '', NETDATA.colors[0])
        ]
    },

    // ------------------------------------------------------------------------
    // HTTP check

    'httpcheck.responsetime': {
        info: '响应<code>时间</code>描述了请求和响应之间经过的时间。' +
            '目前，响应时间的准确性较低，仅供参考。'
    },

    'httpcheck.responselength': {
        info: '响应<code>长度计算响应</code>正文中的字符数。对于静态页面，这应该是基本恒定的。'
    },

    'httpcheck.status': {
        valueRange: "[0, 1]",
        info: '此图表验证了 Web 服务器的响应。如果触发，每个状态维度的值为 <code>1</code>。' +
            '仅当满足所有约束条件时，Dimension <code>success</code>才为 <code>1</code>。'+
            '此图表对于闹钟或第三方应用程序最有用。'
    },

    // ------------------------------------------------------------------------
    // NETDATA

    'netdata.response_time': {
        info: 'netdata API 响应时间衡量 netdata 为请求提供服务所需的时间。这个时间包括所有内容，从接收请求的第一个字节到发送其回复的最后一个字节，因此它包括所有涉及的网络延迟（即慢速网络上的客户端会影响这些指标）。'
    },

    // ------------------------------------------------------------------------
    // RETROSHARE

    'retroshare.bandwidth': {
        info: 'RetroShare 入站和出站流量。',
        mainheads: [
            netdataDashboard.gaugeChart('Received', '12%', 'bandwidth_down_kb'),
            netdataDashboard.gaugeChart('Sent', '12%', 'bandwidth_up_kb')
        ]
    },

    'retroshare.peers': {
        info: '（已连接）RetroShare 好友的数量。',
        mainheads: [
            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="peers_connected"'
                    + ' data-append-options="friends"'
                    + ' data-chart-library="easypiechart"'
                    + ' data-title="connected friends"'
                    + ' data-units=""'
                    + ' data-width="8%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'retroshare.dht': {
        info: '关于RetroShare的DHT的统计数据。这些值是估计的！'
    },

    // ------------------------------------------------------------------------
    // fping

    'fping.quality': {
        colors: NETDATA.colors[10],
        height: 0.5
    },

    'fping.packets': {
        height: 0.5
    },


    // ------------------------------------------------------------------------
    // containers

    'cgroup.cpu_limit': {
        valueRange: "[0, null]",
        mainheads: [
            function (os, id) {
                void(os);
                cgroupCPULimitIsSet = 1;
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="used"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="CPU"'
                    + ' data-units="%"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[4] + '"'
                    + ' role="application"></div>';
            }
        ]
    },

    'cgroup.cpu': {
        mainheads: [
            function (os, id) {
                void(os);
                if (cgroupCPULimitIsSet === 0) {
                    return '<div data-netdata="' + id + '"'
                        + ' data-chart-library="gauge"'
                        + ' data-title="CPU"'
                        + ' data-units="%"'
                        + ' data-gauge-adjust="width"'
                        + ' data-width="12%"'
                        + ' data-before="0"'
                        + ' data-after="-CHART_DURATION"'
                        + ' data-points="CHART_DURATION"'
                        + ' data-colors="' + NETDATA.colors[4] + '"'
                        + ' role="application"></div>';
                }
                else
                    return '';
            }
        ]
    },

    'cgroup.mem_usage_limit': {
        mainheads: [
            function (os, id) {
                void(os);
                cgroupMemLimitIsSet = 1;
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="used"'
                    + ' data-append-options="percentage"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Memory"'
                    + ' data-units="%"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[1] + '"'
                    + ' role="application"></div>';
            }
        ]
    },

    'cgroup.mem_usage': {
        mainheads: [
            function (os, id) {
                void(os);
                if (cgroupMemLimitIsSet === 0) {
                    return '<div data-netdata="' + id + '"'
                        + ' data-chart-library="gauge"'
                        + ' data-title="Memory"'
                        + ' data-units="MB"'
                        + ' data-gauge-adjust="width"'
                        + ' data-width="12%"'
                        + ' data-before="0"'
                        + ' data-after="-CHART_DURATION"'
                        + ' data-points="CHART_DURATION"'
                        + ' data-colors="' + NETDATA.colors[1] + '"'
                        + ' role="application"></div>';
                }
                else
                    return '';
            }
        ]
    },

    'cgroup.throttle_io': {
        mainheads: [
            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="read"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="读取磁盘 I/O"'
                    + ' data-units="KB/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[2] + '"'
                    + ' role="application"></div>';
            },
            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="write"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="写入磁盘 I/O"'
                    + ' data-units="KB/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' role="application"></div>';
            }
        ]
    },

    // ------------------------------------------------------------------------
    // beanstalkd
    // system charts
    'beanstalk.cpu_usage': {
        info: 'beanstalkd 使用的用户和系统的 CPU 时间量。'
    },

    // This is also a per-tube stat
    'beanstalk.jobs_rate': {
        info: '所服务的 beanstalkd 处理的作业的速率。'
    },

    'beanstalk.connections_rate': {
        info: '向 Beanstalkd 打开的连接速率。'
    },

    'beanstalk.commands_rate': {
        info: 'beanstalkd 接收的命令速率。'
    },

    'beanstalk.current_tubes': {
        info: '服务器上的当前管总数，包括默认管（始终存在）。'
    },

    'beanstalk.current_jobs': {
        info: '按状态分组的所有管道中的当前作业数量：紧急、就绪、保留、延迟和埋藏。'
    },

    'beanstalk.current_connections': {
        info: '按连接类型分组的当前连接数：已写入、生产者、工作线程、等待。'
    },

    'beanstalk.binlog': {
        info: '<code>写入</code>二进制日志并作为压缩的一部分<code>迁移</code>的记录的速率。'
    },

    'beanstalk.uptime': {
        info: 'beanstalkd 服务器运行的总时间。'
    },

    // tube charts
    'beanstalk.jobs': {
        info: '当前在管道中的作业数量按状态分组：紧急、就绪、保留、延迟和埋藏。'
    },

    'beanstalk.connections': {
        info: '按连接类型分组的当前与该管的连接数;使用、等待和观看。'
    },

    'beanstalk.commands': {
        info: 'beanstalkd 执行的<code>删除</code>和<code>暂停</code>命令的速率。'
    },

    'beanstalk.pause': {
        info: '显示有关管道已暂停多长时间以及暂停后剩余时间的信息。'
    },

    // ------------------------------------------------------------------------
    // ceph

    'ceph.general_usage': {
        info: '所有 ceph 集群中的使用情况和可用空间。'
    },

    'ceph.general_objects': {
        info: 'ceph 集群上的对象存储总数。'
    },

    'ceph.general_bytes': {
        info: '集群每秒读取和写入数据。'
    },

    'ceph.general_operations': {
        info: '每秒的读取和写入操作数。'
    },

    'ceph.general_latency': {
        info: '所有 OSD 中的应用和提交延迟总数。应用延迟是将更新刷新到磁盘所花费的总时间。提交延迟是将操作提交到日志所花费的总时间。'
    },

    'ceph.pool_usage': {
        info: '每个池中的使用空间。'
    },

    'ceph.pool_objects': {
        info: '每个池中存在的对象数。'
    },

    'ceph.pool_read_bytes': {
        info: '每个池中每秒读取数据的速率。'
    },

    'ceph.pool_write_bytes': {
        info: '每个池中每秒写入数据的速率。'
    },

    'ceph.pool_read_objects': {
        info: '每个池中每秒读取的对象数。'
    },

    'ceph.pool_write_objects': {
        info: '每个池中每秒的写入对象数。'
    },

    'ceph.osd_usage': {
        info: '每个 OSD 中的使用空间。'
    },

    'ceph.apply_latency': {
        info: '刷新每个 OSD 中的更新所花费的时间。'
    },

    'ceph.commit_latency': {
        info: '将操作提交到每个 OSD 中的日志所花费的时间。'
    },

    // ------------------------------------------------------------------------
    // web_log

    'web_log.response_statuses': {
        info: '按类型划分的 Web 服务器响应。<code>success</code> 包括 <b>1xx</b>、<b>2xx</b> 和 304，error <code></code> 包括 5xx，redirect 包括 <code></code> <b>3xx</b>（<b>304</b> 除外），<code>bad</code> 包括 <b></b><b>4xx</b>，<code>其他</code>是所有其他响应。<b></b>',
        mainheads: [
            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="success"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="成功"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[0] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="redirect"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="重定向"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[2] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="bad"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="错误请求"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="error"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="服务器错误"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[1] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            }
        ]
    },

    'web_log.response_codes': {
        info: '按代码系列划分的 Web 服务器响应。 ' +
            '根据标准 <code>1xx</code> 是信息响应， ' +
            '<code>2xx</code> 是成功的响应，' +
            '<code>3xx</code> 是重定向（尽管它们包括用作“<b>未修改</b>”的 <b>304</b>），' +
            '<code>4xx</code> 是错误的请求， ' +
            '<code>5xx</code> 是内部服务器错误， ' +
            '<code>other</code> 是非标准响应，' +
            '<code>unmatched</code> 计算日志文件中与插件不匹配的行数（<a href=“https://github.com/netdata/netdata/issues/new?title=web_log%20reports%20unmatched%20lines&body=web_log%20plugin%20reports%20unmatched%20lines.%0A%0AThis%20is%20my%20log:%0A%0A%60%60%60txt%0A%0Aplease%20paste%20your%20web%20server%20log%20here%0A%0A%60%60%60” target=“_blank”></a>如果您有任何不匹配的行，请告诉我们）。'
    },

    'web_log.response_time': {
        mainheads: [
            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="avg"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="平均响应时间"'
                    + ' data-units="milliseconds"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[4] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },

    'web_log.detailed_response_codes': {
        info: '每个响应代码的响应数。'
    },

    'web_log.requests_per_ipproto': {
        info: '每个 IP 协议版本接收的 Web 服务器请求。'
    },

    'web_log.clients': {
        info: '在每次数据收集迭代中访问 Web 服务器的唯一客户端 IP。如果数据收集是每秒收集的，则此图表显示<b>每秒的唯一客户端 IP</b>。<b></b>'
    },

    'web_log.clients_all': {
        info: '自上次重新启动 netdata 以来访问 Web 服务器的唯一客户端 IP。该插件将访问过 Web 服务器的所有唯一 IP 保存在内存中。在非常繁忙的 Web 服务器（数百万个唯一 IP）上，您可能需要禁用此图表（检查 <a href=“https://github.com/netdata/netdata/blob/master/conf.d/python.d/web_log.conf” target=“_blank”>/<code>etc/netdata/python.d/web_log.conf</code></a>）。'
    },

    // ------------------------------------------------------------------------
    // web_log for squid

    'web_log.squid_response_statuses': {
        info: ' 按Squid类型划分的响应。' +
            '<code>success</code> 包括 <b>1xx</b>, <b>2xx</b>, <b>000</b>, <b>304</b>, ' +
            '<code>error</code> 包括 <b>5xx</b> 和 <b>6xx</b>, ' +
            '<code>redirect</code> 包括 <b>3xx</b> 除了 <b>304</b>, ' +
            '<code>bad</code> 包括 <b>4xx</b>, ' +
            '<code>other</code> 是所有其他响应。',
        mainheads: [
            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="success"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="成功的"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[0] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="redirect"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="重定向"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[2] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="bad"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="错误请求"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="error"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="服务器错误"'
                    + ' data-units="requests/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[1] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            }
        ]
    },

    'web_log.squid_response_codes': {
        info: '按代码系列划分的 Web 服务器响应。 ' +
            '根据 HTTP 标准 <code>1xx</code> 是信息响应，' +
            '<code>2xx</code> 是成功的响应，' +
            '<code>3xx</code> 是重定向（尽管它们包括用作“<b>未修改</b>”的 <b>304</b>）、' +
            '<code>4xx</code> 是糟糕的请求，' +
            '<code>5xx</code> 是内部服务器错误。' +
            'Squid 还主要为 UDP 请求定义了 <code>000</code>，而 ' +
            '<code>6xx</code> 表示损坏的上游服务器发送错误的标头。'+
            '最后，<code>other</code>是非标准响应，并且'+
            '<code>unmatched</code> 计算日志文件中插件不匹配的行 （<a href=“https://github.com/netdata/netdata/issues/new?title=web_log%20reports%20unmatched%20lines&body=web_log%20plugin%20reports%20unmatched%20lines.%0A%0AThis%20is%20my%20log:%0A%0A%60%60%60txt%0A%0Aplease%20paste%20your%20web%20server%20log%20here%0A%0A%60%60%60” target=“_blank”>如果您有任何不匹配的行，请告诉我们</a>）。'
    },

    'web_log.squid_duration': {
        mainheads: [
            function (os, id) {
                void(os);
                return '<div data-netdata="' + id + '"'
                    + ' data-dimensions="avg"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="平均响应时间"'
                    + ' data-units="milliseconds"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[4] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },

    'web_log.squid_detailed_response_codes': {
        info: '每个响应代码的响应数。'
    },

    'web_log.squid_clients': {
        info: '在每次数据收集迭代中访问 squid 的唯一客户端 IP。如果数据收集是每秒收集的，则此图表显示<b>每秒的唯一客户端 IP</b>。<b></b>'
    },

    'web_log.squid_clients_all': {
        info: '自上次重新启动 netdata 以来访问 squid 的唯一客户端 IP。该插件将访问服务器的所有唯一 IP 保存在内存中。在非常繁忙的 squid 服务器（数百万个唯一 IP）上，您可能需要禁用此图表（检查 <a href=“https://github.com/netdata/netdata/blob/master/conf.d/python.d/web_log.conf” target=“_blank”>/<code>etc/netdata/python.d/web_log.conf</code></a>）。'
    },

    'web_log.squid_transport_methods': {
        info: '按交付方式细分：<code>TCP</code> 是 HTTP 端口上的请求（通常为 3128），' +
            '<code>UDP</code> 是 ICP 端口（通常为 3130）或 HTCP 端口（通常为 4128）上的请求。 ' +
            '如果使用 log_icp_queries 选项禁用了 ICP 日志记录，则不会记录任何 ICP 答复。 ' +
            '<code>NONE</code> 用于表示 Squid 提供了异常响应或根本没有响应。' +
            '在 cachemgr 请求和错误中可见，通常是当事务在被分类为上述结果之一之前失败时。' +
            '在对 <code>CONNECT</code> 请求的响应中也可以看到。'
    },

    'web_log.squid_code': {
        info: '这些是组合的鱿鱼结果状态代码。下表给出了每个组件的细分。' +
            '查看 <a href=“http://wiki.squid-cache.org/SquidFaq/SquidLogs”>squid 文档</a>。'
    },

    'web_log.squid_handling_opts': {
        info: '这些标记是可选的，用于描述执行特定处理的原因或请求的来源。 ' +
            '<code>CLIENT</code> 表示客户端请求设置了影响响应的限制。通常看到客户端发出无缓存或类似的<b>缓存</b>控制命令以及请求。因此，缓存必须验证对象。' +
            '<code>IMS</code> 表示客户端发送了重新验证（条件）请求。 ' +
            '<code>ASYNC</code>, 当请求由 Squid 在内部生成时使用。通常，这是缓存信息交换的后台提取、从过时的重新验证缓存控件的后台重新验证或正在加载的 ESI 子对象。' +
            '<code>SWAPFAIL</code> 当对象被认为在缓存中，但无法访问时分配。已从服务器请求新副本。 ' +
            '<code>REFRESH</code> 当重新验证（条件）请求发送到服务器时。' +
            '<code>SHARED</code> 当此请求通过折叠转发与现有事务合并时。注意：现有请求未标记为 SHARED。 ' +
            '<code>REPLY</code> 当在服务器或对等方的 HTTP 回复中请求特定处理时。通常在 DENIED 上出现，因为 http_reply_access ACL 阻止将服务器响应对象传递到客户端。'
    },

    'web_log.squid_object_types': {
        info: '这些标记是可选的，用于描述生成的对象类型。 ' +
            '<code>NEGATIVE</code> 仅在 HIT 响应上显示，表示响应是缓存的错误响应。例如，<b>未找到 404</b>。 ' +
            '<code>STALE</code> 表示对象已缓存并已过时。这通常是由“重新验证时过时”或“错误时过时”缓存控制引起的。' +
            '<code>OFFLINE</code> 在offline_mode期间从缓存中检索请求的对象时。脱机模式从不验证任何对象。 ' +
            '<code>INVALID</code> 当收到无效请求时。已发送错误响应，指示问题所在。' +
            '<code>FAIL</code> 仅在 <code>REFRESH</code> 上显示，表示重新验证请求失败。响应对象可以是服务器提供的网络错误，也可以是正在重新验证的过时对象，具体取决于过时的 if-error 缓存控制。 ' +
            '<code>MODIFIED</code> 仅在 <code>REFRESH</code> 响应上显示，以指示重新验证生成了新的修改对象。 ' +
            '<code>UNMODIFIED</code> 仅在 <code>REFRESH</code> 响应上看到，以指示重新验证产生了 <b>304</b>（未修改）状态，该状态已中继到客户端。 ' +
            '<code>REDIRECT</code> 当 squid 生成对此请求的 HTTP 重定向响应时。'
    },

    'web_log.squid_cache_events': {
        info: '这些标记是可选的，用于描述响应是从缓存、网络还是其他方式加载的。' +
            '<code>HIT</code> 当传递的响应对象是本地缓存对象时。 ' +
            '<code>MEM</code> 当响应对象来自内存缓存时，避免磁盘访问。仅在 HIT 响应中可见。' +
            '<code>MISS</code> 当传递的响应对象是网络响应对象时。 ' +
            '<code>DENIED</code> 当请求被访问控制拒绝时。 ' +
            '<code>NOFETCH</code> 特定于 ICP 的类型，指示服务处于活动状态，但不用于此请求（在“-Y”启动期间发送，或者在频繁失败期间，仅命中模式下的缓存将返回 UDP_HIT 或 UDP_MISS_NOFETCH。因此， Neighbours只会获得命中）。' +
            '<code>TUNNEL</code> 当为此事务建立二进制隧道时。'
    },

    'web_log.squid_transport_errors': {
        info: '这些标记是可选的，用于描述在响应传递期间发生的一些错误情况（如果有）。' +
            '<code>ABORTED</code> 当由于连接中止（通常由客户端）而未完成响应时。 ' +
            '<code>TIMEOUT</code>, 当响应由于连接超时而未完成时。'
    },

    // ------------------------------------------------------------------------
    // Fronius Solar Power

    'fronius.power': {
        info: '正电网值表示电力来自<code>电网</code>。负值是返回电网的多余电力，可能会出售。' +
            '<code>Photovoltaics</code> 是太阳能电池板产生的电力。 ' +
            '<code>Accumulator</code> 是蓄电池中存储的功率（如果存在）。'
    },

    'fronius.autonomy': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, 100]",
        info: '<code>自主性</code>是安装自主程度的百分比。100%的自主性意味着装置产生的能量超过需求。 ' +
            '<code>自耗</code>表示当前产生的功率与当前负载之间的比率。当它达到 100% 时，<code>自主性</code>下降，因为太阳能电池板无法产生足够的能量并且需要电网的支持。'
    },

    'fronius.energy.today': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, null]"
    },

    // ------------------------------------------------------------------------
    // Stiebel Eltron Heat pump installation

    'stiebeleltron.system.roomtemp': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, null]"
    },

    // ------------------------------------------------------------------------
    // Port check

    'portcheck.latency': {
        info: '<code>延迟</code>描述连接到 TCP 端口所花费的时间。不发送或接收任何数据。 ' +
            '目前，延迟的准确性较低，仅供参考。'
    },

    'portcheck.status': {
        valueRange: "[0, 1]",
        info: '<code>状态</code>图表验证服务的可用性。' +
            '如果触发，每个状态维度的值为 <code>1</code>。仅当可以建立连接时，维度<code>成功</code>率才为 <code>1</code>。 ' +
            '此图表对于闹钟和第三方应用最有用。'
    },

    // ------------------------------------------------------------------------

    'chrony.system': {
        info: '在正常操作中，chronyd 从不对系统时钟进行步进，因为时间刻度的任何跳跃都可能对某些应用程序产生不利影响。相反，系统时钟中的任何错误都会通过稍微加快或减慢系统时钟来纠正，直到错误被消除，然后恢复到系统时钟的正常速度。这样做的结果是，在一段时间内，系统时钟（由其他程序使用 <code>gettimeofday（）</code> 系统调用或 shell 中的 <code>date</code> 命令读取）将不同于 chronyd 对当前真实时间的估计（当它在服务器模式下运行时，它会向 NTP 客户端报告）。此行上报告的值是由于此影响而产生的差异。',
        colors: NETDATA.colors[3]
    },

    'chrony.offsets': {
        info: '<code>Last Offset</code> 是上次时钟更新时估计的本地偏移量。<code>RMS</code> 偏移是偏移值的长期平均值。',
        height: 0.5
    },

    'chrony.stratum': {
        info: '<code>stratum</code>表示我们与带有参考时钟的计算机相距多少跳。这样的计算机是 Stratum-1 计算机。',
        decimalDigits: 0,
        height: 0.5
    },

    'chrony.root': {
        info: '与此系统同步的根时间服务器的估计延迟。<code>延迟</code>是到最终从计算机同步的第 1 层计算机的网络路径延迟的总和。<code>色散</code>是通过所有计算机累积回 Stratum-1 计算机的总色散，计算机最终从该计算机同步。色散是由系统时钟分辨率、统计测量变化等引起的。'
    },

    'chrony.frequency': {
        info: '<code>频率</code>是如果 chronyd 不纠正它，系统时钟将出错的速率。它以ppm（百万分之一）表示。例如，值为 1ppm 意味着当系统的时钟认为它前进了 1 秒时，它实际上相对于真实时间前进了 1.000001 秒。',
        colors: NETDATA.colors[0]
    },

    'chrony.residualfreq': {
        info: '这显示了当前所选参考源的<code>残余频率</code>。它反映了参考源的测量值所指示的频率与当前使用的频率之间的任何差异。这并不总是零的原因是对频率应用了平滑过程。每次从参考源获得测量值并计算新的残余频率时，都会将该残差的估计精度与现有频率值的估计精度（见<code>偏斜</code>）进行比较。计算新频率的加权平均值，权重取决于这些精度。如果参考源的测量结果遵循一致的趋势，则随着时间的推移，残差将降至零。',
        height: 0.5,
        colors: NETDATA.colors[3]
    },

    'chrony.skew': {
        info: '频率上的估计误差。',
        height: 0.5,
        colors: NETDATA.colors[5]
    },

    'couchdb.active_tasks': {
        info: '在此 CouchDB <b>集群</b>上运行的活动任务。目前存在四种类型的任务：索引器（视图构建）、复制、数据库压缩和视图压缩。'
    },

    'couchdb.replicator_jobs': {
        info: '此节点上正在进行的任何复制作业的详细细分。有关更多信息，请参阅 <a href=“http://docs.couchdb.org/en/latest/replication/replicator.html”>replicator 文档</a>。'
    },

    'couchdb.open_files': {
        info: 'CouchDB 保留的所有打开文件的计数。如果此值似乎固定在 1024 或 4096，则服务器进程可能已达到打开的文件句柄限制，并且<a href="http://docs.couchdb.org/en/latest/maintenance/performance.html#pam-and-ulimit">需要增加。</a>'
    },

    'btrfs.disk': {
        info: 'BTRFS 的物理磁盘使用情况。此处报告的磁盘空间是分配给 BTRFS 卷的原始物理磁盘空间（即<b>在任何 RAID 级别之前</b>）。BTRFS 使用两阶段分配器，首先为一种类型的块（数据、元数据或系统）分配大区域的磁盘空间，然后在这些区域内使用常规块分配器。<code>未</code>分配是尚未分配的物理磁盘空间，可用于成为数据、MetData 或系统按需。当 <code>unallocated</code> 为零时，所有可用磁盘空间都已分配给特定函数。理想情况下，正常卷应至少有 5% 的总空间<code>未分配</code>。您可以通过定期对卷运行 btrfs balance 命令来保持卷健康（查看 <code>man btrfs-balance</code> 以获取更多信息）。<code></code> 请注意，如果卷使用不同大小的设备，则列为<code>未分配</code>的某些空间实际上可能不可用。',
        colors: [NETDATA.colors[12]]
    },

    'btrfs.data': {
        info: 'BTRFS 数据的逻辑磁盘使用情况。数据块用于存储实际的文件数据（文件内容）。此处报告的磁盘空间是可用分配（即在任何条带化或复制之后）。理想情况下，正常卷的可用空间应不超过此处持续报告的几 GB。运行 <code>btrfs balance</code> 可以在这里提供帮助。'
    },

    'btrfs.metadata': {
        info: 'BTRFS 元数据的逻辑磁盘使用情况。元数据块存储了大多数文件系统内部结构，以及目录结构和文件名等信息。此处报告的磁盘空间是可用分配（即在任何条带化或复制之后）。理想情况下，正常卷的可用空间应不超过此处持续报告的几 GB。运行 <code>btrfs balance</code> 可以在这里提供帮助。'
    },

    'btrfs.system': {
        info: 'BTRFS 系统的逻辑磁盘使用情况。系统区块存储有关其他区块分配的信息。此处报告的磁盘空间是可用分配（即在任何条带化或复制之后）。与“数据”和“元数据”相比，此处报告的值应相对较小，并将随着卷大小和整体空间使用情况而扩展。'
    },

    // ------------------------------------------------------------------------
    // RabbitMQ

    // info: the text above the charts
    // heads: the representation of the chart at the top the subsection (second level menu)
    // mainheads: the representation of the chart at the top of the section (first level menu)
    // colors: the dimension colors of the chart (the default colors are appended)
    // height: the ratio of the chart height relative to the default

    'rabbitmq.queued_messages': {
        info: '就绪和未确认的排队消息的总数。 立即传递的邮件不计入此处。'
    },

    'rabbitmq.message_rates': {
        info: '总体消息传递率，包括确认、发放、重新交付和发布。'
    },

    'rabbitmq.global_counts': {
        info: '通道、使用者、连接、队列和交换的总计。'
    },

    'rabbitmq.file_descriptors': {
        info: '已使用的归档描述符总数。有关详细信息，请参阅 <code><a href=“https://www.rabbitmq.com/production-checklist.html#resource-limits-file-handle-limit” target=“_blank”>Open File Limits</a></code>。',
        colors: NETDATA.colors[3]
    },

    'rabbitmq.sockets': {
        info: '使用的套接字描述符的总数。 每个使用的套接字也算作一个已使用的文件描述符。 有关详细信息，请参阅 <code><a href=“https://www.rabbitmq.com/production-checklist.html#resource-limits-file-handle-limit” target=“_blank”>Open File Limits</a></code>。',
        colors: NETDATA.colors[3]
    },

    'rabbitmq.processes': {
        info: '在 Erlang VM 中运行的进程总数。 这与主机上运行的进程数不同。',
        colors: NETDATA.colors[3]
    },

    'rabbitmq.erlang_run_queue': {
        info: 'Erlang 调度程序排队等待运行的 Erlang 进程数。',
        colors: NETDATA.colors[3]
    },

    'rabbitmq.memory': {
        info: 'RabbitMQ 使用的内存总量。 这是一个复杂的统计信息，可以在管理 UI 中进一步分析。 有关详细信息，请参见 <code><a href=“https://www.rabbitmq.com/production-checklist.html#resource-limits-ram” target=“_blank”>Memory</a></code>。',
        colors: NETDATA.colors[3]
    },

    'rabbitmq.disk_space': {
        info: '消息存储占用的磁盘空间总量。 有关详细信息，请参见 <code><a href=“https://www.rabbitmq.com/production-checklist.html#resource-limits-disk-space” target=_“blank”>磁盘空间限制</a></code>。',
        colors: NETDATA.colors[3]
    },

    // ------------------------------------------------------------------------
    // ntpd

    'ntpd.sys_offset': {
        info: '对于没有任何时间关键服务的主机，即使网络延迟较高，&lt; 100 毫秒的偏移量也应该是可以接受的。对于具有时间关键型服务的主机，通过使用具有低延迟的对等体并配置最佳<b>轮询指数</b>值，可以实现大约 0.01 毫秒或更短的偏移量。',
        colors: NETDATA.colors[4]
    },

    'ntpd.sys_jitter': {
        info: '抖动统计数据是指数加权的 RMS 平均值。系统抖动在 NTPv4 规范中定义;时钟抖动统计信息由时钟规范模块计算。'
    },

    'ntpd.sys_frequency': {
        info: '频率偏移以相对于系统频率的ppm（百万分之一）表示。时钟所需的频率校正在启动之间以及由于温度或辐射等外部影响可能会有很大差异。',
        colors: NETDATA.colors[2],
        height: 0.6
    },

    'ntpd.sys_wander': {
        info: '漂移统计量是指数加权的 RMS 平均值。',
        colors: NETDATA.colors[3],
        height: 0.6
    },

    'ntpd.sys_rootdelay': {
        info: 'rootdelay 是主参考时钟的往返延迟，类似于 <code>ping</code> 命令显示的延迟。延迟越低，时钟偏移越低。',
        colors: NETDATA.colors[1]
    },

    'ntpd.sys_stratum': {
        info: '到主参考时钟的“跳数”距离',
        colors: NETDATA.colors[5],
        height: 0.3
    },

    'ntpd.sys_tc': {
        info: '时间常数和轮询间隔表示为 2 的指数。默认轮询指数 6 对应于 64 秒的轮询间隔。对于典型的 Internet 路径，最佳轮询间隔约为 64 秒。对于具有现代计算机的快速 LAN，轮询指数为 4 （16 s） 是合适的。<a href=“http://doc.ntp.org/current-stable/poll.html”>轮询进程</a>按时钟规则算法确定的时间间隔发送 NTP 数据包。',
        height: 0.5
    },

    'ntpd.sys_precision': {
        colors: NETDATA.colors[6],
        height: 0.2
    },

    'ntpd.peer_offset': {
        info: '对等时钟相对于系统时钟的偏移量（以毫秒为单位）。此处的值越小，在本地时钟初始同步后，对等体的权重更大，以便进行选择。对于向其他系统提供时间服务的系统，这些应尽可能低。'
    },

    'ntpd.peer_delay': {
        info: '与对等体通信的往返时间 （RTT），类似于 <code>ping</code> 命令显示的延迟。不像偏移或抖动那样重要，但仍然会考虑选择算法（因为作为一般规则，更低的延迟意味着更准确的时间）。在大多数情况下，它应该低于 100 毫秒。'
    },

    'ntpd.peer_dispersion': {
        info: '这是对等体和本地系统之间估计误差的度量。这里的值越低越好。'
    },

    'ntpd.peer_jitter': {
        info: '这实质上是对对等方<code>system_jitter</code>值的远程估计。此处较低的值高度有利于对等选择，这是给定时间服务器整体质量的良好指标（好的服务器在这里的值不超过个位数毫秒，高质量的第一层服务器通常具有亚毫秒级抖动）。'
    },

    'ntpd.peer_xleave': {
        info: '此变量在交错模式下使用（仅在 NTP 对称和广播模式下使用）。请参见<a href=“http://doc.ntp.org/current-stable/xleave.html”>NTP Interleaved Modes</a>。'
    },

    'ntpd.peer_rootdelay': {
        info: '对于第 1 层服务器，这是参考时钟的访问延迟。对于较低层的服务器，它是它们所同步的系统的<code>peer_delay</code>和<code>peer_rootdelay</code>的总和。与<code>peer_delay</code>类似，这里的值越低，技术上越好，但对同伴选择的影响有限。'
    },

    'ntpd.peer_rootdisp': {
        info: '与<code>peer_rootdelay</code>相同，但测量累积<code>peer_dispersion</code>而不是累积<code>peer_delay</code>。'
    },

    'ntpd.peer_hmode': {
        info: '<code>peer_hmode</code> 和 <code>peer_pmode</code> 变量提供有关向给定对等方发送和接收数据包的模式的信息。模式 1 是对称主动的（本地系统和远程对等体在 /<code>etc/ntp.conf</code> 中都相互声明为对等体），模式 2 是对称被动的（只有一端将另一端声明为对等体），模式 3 是客户端，模式 4 是服务器，模式 5 是广播（也用于组播和任播操作）。',
        height: 0.2
    },

    'ntpd.peer_pmode': {
        height: 0.2
    },

    'ntpd.peer_hpoll': {
        info: '<code>peer_hpoll</code> 和 <code>peer_ppoll</code> 变量是轮询间隔（以秒为单位）的 log2 表示形式。',
        height: 0.5
    },

    'ntpd.peer_ppoll': {
        height: 0.5
    },

    'ntpd.peer_precision': {
        height: 0.2
    },

    'spigotmc.tps': {
        info: '每秒运行 1、5 和 15 分钟的平均服务器时钟周期数。 理想化的服务器将显示所有值的 20.0，但实际上这种情况几乎从未发生过。 典型的服务器应在此处显示大约 19.98-20.0。 较低的值表示服务器端延迟逐渐增加（因此，您的服务器需要更好的硬件或较低的用户限制）。 每低于 0.05 个刻度，红石时钟将滞后约 0.25%。 低于大约 19.50 的值可能会干扰复杂的自由运行的红石电路，并会明显减慢生长速度。'
    },

    'spigotmc.users': {
        info: '受监控的 Spigot 服务器上当前连接的用户数量。'
    },

    'unbound.queries': {
        info: '显示正在处理的每种类型的查询数。请注意，<code>递归</code>查询也被视为缓存未命中。'
    },

    'unbound.reqlist': {
        info: '显示有关 Unbound 内部请求列表的各种统计信息。'
    },

    'unbound.recursion': {
        info: '完成递归名称解析的平均时间和中位数时间。'
    },

    'unbound.cache': {
        info: '各种缓存中每个缓存中的项数。'
    },

    'unbound.threads.queries': {
        height: 0.2
    },

    'unbound.threads.reqlist': {
        height: 0.2
    },

    'unbound.threads.recursion': {
        height: 0.2
    },

    'boinc.tasks': {
        info: '任务总数和活动任务数。 活动任务是指当前正在处理的任务，或部分处理但已暂停的任务。'
    },

    'boinc.states': {
        info: '每个任务状态中的任务计数。 正常状态顺序为<code>“新建</code>”、“<code>正在下载</code>”、“<code>准备运行</code>”、“<code>正在</code>上传”、“<code>已上传</code>”。 标记为<code>“准备</code>运行”的任务可能正在活动运行，也可能正在等待计划。 <code>计算错误</code>是在执行过程中由于某种原因而失败的任务。 已<code>中止的任务已</code>手动取消，将不会被处理。 <code>上传失败</code>是无法上传到服务器的已完成任务，通常表示网络问题。'
    },

    'boinc.sched': {
        info: '每个计划状态下的活动任务计数。 <code>计划</code>任务是在允许系统处理任务时将运行的任务。 <code>抢占</code>式任务处于待机状态，如果<code>计划</code>任务由于某种原因停止运行，则将运行。 <code>未初始化</code>的任务不应存在，并指示调度程序尚未尝试调度它们。'
    },

    'boinc.process': {
        info: '每个进程状态中的活动任务计数。 <code>正在执行</code>的任务正在运行。 <code>挂起</code>的任务具有关联的进程，但当前未运行（因为系统当前未处理任何任务，或者因为它们已被更高优先级的任务抢占）。 退出任务将正常<code>退出</code>。 <code>中止</code>的任务超出了某个资源限制，并且正在关闭。 <code>复制挂起</code>的任务正在等待后台文件传输完成。 <code>未初始化</code>的任务还没有关联的进程。'
    },

    'w1sensor.temp': {
        info: '温度来自1-Wire温度传感器。'
    },

    'logind.sessions': {
        info: '显示登录名跟踪的每种类型的活动会话数。'
    },

    'logind.users': {
        info: '显示 logind 跟踪的每种类型的活跃用户数。'
    },

    'logind.seats': {
        info: '显示 logind 跟踪的活动席位数。 每个座位对应于显示设备和输入设备的组合，为系统提供物理存在。'
    },

    // ------------------------------------------------------------------------
    // ProxySQL

    'proxysql.pool_status': {
        info: '后端服务器的状态。' +
        '<code>1=ONLINE</code> 后端服务器已全面运行，' +
        '<code>2=SHUNNED</code> 后端服务器暂时停止使用，因为在太短的时间内出现过多的连接错误，或者复制滞后超过允许的阈值， ' +
        '<code>3=OFFLINE_SOFT</code> 当服务器进入OFFLINE_SOFT模式时，将不再接受新的传入连接，而现有连接将保留，直到它们变为非活动状态。换言之，在当前事务完成之前，连接将一直处于使用状态。这允许优雅地分离后端， ' +
        '<code>4=OFFLINE_HARD</code> 当服务器进入OFFLINE_HARD模式时，现有连接将被丢弃，而新的传入连接也不会被接受。这相当于从主机组中删除服务器，或暂时将其从主机组中取出以进行维护工作。 ' +
        '<code>-1</code> 未知状态。'
    },

    'proxysql.pool_net': {
        info: '发送到后端/从后端接收的数据量' +
        '(这不包括元数据数据包的标头、OK/ERR 数据包、字段的描述等)。'
    },

    'proxysql.pool_overall_net': {
        info: '发送到/从所有后端接收的数据量 ' +
        '（这不包括元数据数据包的标头、OK/ERR 数据包、字段描述等）.'
    },

    'proxysql.questions': {
        info: '<code>questions</code> 前端发送的查询总数，' +
        '<code>slow_queries</code>运行时间超过全局变量 <code>mysql-long_query_time</code> 中定义的阈值（以毫秒为单位）的查询数。 '
    },

    'proxysql.connections': {
        info: '由于凭据无效或达到max_connections而中止的前端连接数已<code>中止</code>， ' +
        '<code>connected</code> 当前连接的前端连接数，' +
        '<code>created</code> 创建的前端连接数， ' +
        '<code>non_idle</code> 当前未处于空闲状态的前端连接数。 '
    },

    'proxysql.pool_latency': {
        info: '当前 ping 时间（以微秒为单位），从监视器报告。'
    },

    'proxysql.queries': {
        info: '路由到此特定后端服务器的查询数。'
    },

    'proxysql.pool_used_connections': {
        info: 'ProxySQL 当前用于向后端服务器发送查询的连接数。'
    },

    'proxysql.pool_free_connections': {
        info: '连接数目前是免费的。它们保持打开状态，以最大程度地减少向后端服务器发送查询的时间成本。'
    },

    'proxysql.pool_ok_connections': {
        info: '已成功建立连接数。'
    },

    'proxysql.pool_error_connections': {
        info: '未成功建立连接数。'
    },

    'proxysql.commands_count': {
        info: '执行的该类型的命令总数.'
    },

    'proxysql.commands_duration': {
        info: '执行该类型命令所花费的总时间（以毫秒为单位）'
    },

    // ------------------------------------------------------------------------
    // Power Supplies

    'powersupply.capacity': {
        info: undefined
    },

    'powersupply.charge': {
        info: undefined
    },

    'powersupply.energy': {
        info: undefined
    },

    'powersupply.voltage': {
        info: undefined
    }

    // ------------------------------------------------------------------------
};
