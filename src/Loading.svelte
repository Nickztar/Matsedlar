<div class="app">
  <svg class="loading-spinner" viewBox="-24 -24 48 48">
    <circle class="path" cx="0" cy="0" r="20" fill="none" stroke-width="6"></circle>
  </svg>
</div>

<style>
    .app {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        width: 100%;
    }
    .app .loading-spinner {
        animation: rotate 2.625s linear infinite;
        height: 60px;
        transform-origin: center;
        width: 70px;
    }
    .app .loading-spinner .path {
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out 0.75s infinite;
        stroke: var(--priority);
        stroke-linecap: round;
    }

    @-webkit-keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @-moz-keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @-o-keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes dash {
        0% {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 100, 150;
            stroke-dashoffset: -24;
        }
        100% {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: -124;
        }
    }
    @-moz-keyframes dash {
        0% {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 100, 150;
            stroke-dashoffset: -24;
        }
        100% {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: -124;
        }
    }
    @-o-keyframes dash {
        0% {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 100, 150;
            stroke-dashoffset: -24;
        }
        100% {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: -124;
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 100, 150;
            stroke-dashoffset: -24;
        }
        100% {
            stroke-dasharray: 0, 150;
            stroke-dashoffset: -124;
        }
    }
</style>