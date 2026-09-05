import React, { useState, useEffect } from 'react';
import { Terminal, Play, RefreshCw, CheckCircle2, AlertTriangle, Code } from 'lucide-react';

export default function ApiPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState('/api/stats');
  const [method, setMethod] = useState('GET');
  const [payload, setPayload] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState(null);

  const endpoints = [
    {
      url: '/api/stats',
      method: 'GET',
      label: 'GET /api/stats - Real-Time Node.js Server Metrics',
      defaultPayload: ''
    },
    {
      url: '/api/profile',
      method: 'GET',
      label: 'GET /api/profile - Developer Summary JSON',
      defaultPayload: ''
    },
    {
      url: '/api/projects',
      method: 'GET',
      label: 'GET /api/projects - Featured Projects List',
      defaultPayload: ''
    },
    {
      url: '/api/demo/organ-donation/match',
      method: 'POST',
      label: 'POST /api/demo/organ-donation/match - Organ Donation Query',
      defaultPayload: JSON.stringify({ organType: 'Kidney', bloodGroup: 'O+', urgency: 'High' }, null, 2)
    },
    {
      url: '/api/demo/threadcraft/checkout',
      method: 'POST',
      label: 'POST /api/demo/threadcraft/checkout - Payment & Invoice Receipt',
      defaultPayload: JSON.stringify({ items: ['Jacket', 'Shirt'], customerName: 'Recruiter User', cardNumber: '4242424242424242' }, null, 2)
    }
  ];

  const handleEndpointSelect = (url) => {
    const ep = endpoints.find(e => e.url === url);
    if (ep) {
      setSelectedEndpoint(ep.url);
      setMethod(ep.method);
      setPayload(ep.defaultPayload);
    }
  };

  const executeRequest = async () => {
    setLoading(true);
    const start = performance.now();
    try {
      let options = { method: method, headers: { 'Content-Type': 'application/json' } };
      if (method === 'POST' && payload) {
        options.body = payload;
      }
      const res = await fetch(selectedEndpoint, options);
      const data = await res.json();
      const end = performance.now();
      setResponseTime((end - start).toFixed(2));
      setResponse(data);
    } catch (err) {
      setResponse({ error: 'Failed to execute request against Node.js backend', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  // Run stats request initially
  useEffect(() => {
    executeRequest();
  }, []);

  return (
    <section className="section section-alt" id="api-playground">
      <div className="container">
        <div className="section-subtitle">
          <Terminal size={16} /> LIVE BACKEND CONSOLE
        </div>
        <h2 className="section-title">
          Interactive REST API <span className="gradient-text">Playground</span>
        </h2>
        <p className="section-desc">
          Test real Node.js & Express API endpoints live from this terminal window. Select an endpoint below and execute requests to observe response payloads and server observability metrics.
        </p>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
            </div>
            <div className="terminal-title">
              <Code size={14} /> jeevan-node-express-server ~ port 5000
            </div>
            <span className="tech-badge green" style={{ fontSize: '0.75rem' }}>
              REST API ONLINE
            </span>
          </div>

          <div className="terminal-body">
            <div className="terminal-controls">
              <select
                className="endpoint-select"
                value={selectedEndpoint}
                onChange={(e) => handleEndpointSelect(e.target.value)}
              >
                {endpoints.map((ep) => (
                  <option key={ep.url} value={ep.url}>
                    {ep.label}
                  </option>
                ))}
              </select>

              <button
                className="btn btn-primary"
                onClick={executeRequest}
                disabled={loading}
                style={{ padding: '0.75rem 1.4rem' }}
              >
                {loading ? <RefreshCw size={16} className="spin" /> : <Play size={16} />}
                Execute Request
              </button>
            </div>

            {method === 'POST' && (
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  Request Body (JSON Payload):
                </div>
                <textarea
                  className="form-textarea"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', height: '100px', background: '#090d16' }}
                  value={payload}
                  onChange={(e) => setPayload(e.target.value)}
                />
              </div>
            )}

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  Response Body (200 OK):
                </span>
                {responseTime && (
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}>
                    Latency: {responseTime} ms
                  </span>
                )}
              </div>

              <div className="json-viewer">
                {loading ? (
                  <span style={{ color: 'var(--text-muted)' }}>Executing API request to Node.js backend...</span>
                ) : (
                  JSON.stringify(response, null, 2)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
