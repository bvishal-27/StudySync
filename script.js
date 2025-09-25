// StudySync - Notes & PYQ Platform
// Enhanced with Google Analytics Tracking

document.addEventListener('DOMContentLoaded', function() {
    // Sample data structure matching your folder organization
    const subjectsData = {
        "M3(BCS301)": {
            name: "Mathematics III",
            code: "BCS301",
            notes: [
                { name: "Module 1 - Linear Algebra", filename: "Resources/M3(BCS301)/Notes/M1.pdf", size: "2.4 MB" },
                { name: "Module 2 - Calculus", filename: "Resources/M3(BCS301)/Notes/M2.pdf", size: "3.1 MB" },
                { name: "Module 3 - Differential Equations", filename: "Resources/M3(BCS301)/Notes/M3.pdf", size: "2.8 MB" },
                { name: "Module 4 - Probability", filename: "Resources/M3(BCS301)/Notes/M4.pdf", size: "2.5 MB" },
                { name: "Module 5 - Statistics", filename: "Resources/M3(BCS301)/Notes/M5.pdf", size: "3.2 MB" }
            ],
            pyq: [
                { name: "BCS301 - Previous Year Questions", filename: "Resources/M3(BCS301)/PYQ/BCS301_Dec23-Jan2024.pdf", size: "4.5 MB", year: "2020-2023" },
                { name: "M3 Solved Papers - June 2024", filename: "Resources/M3(BCS301)/PYQ/solved_june24.pdf", size: "5.2 MB", year: "2024" },
                { name: "BCS301 Dec 2023 - Jan 2024", filename: "Resources/M3(BCS301)/PYQ/BCS301_Dec23-Jan2024.pdf", size: "4.8 MB", year: "2023-2024" }
            ]
        },
        "DDCO(BCS302)": {
            name: "Digital Design and Computer Organization",
            code: "BCS302",
            notes: [
                { name: "Module 1 - Digital Logic", filename: "Resources/DDCO(BCS302)/BCS302_Notes/M1.pdf", size: "2.1 MB" },
                { name: "Module 2 - Combinational Circuits", filename: "Resources/DDCO(BCS302)/BCS302_Notes/M2.pdf", size: "2.7 MB" },
                { name: "Module 3 - Sequential Circuits", filename: "Resources/DDCO(BCS302)/BCS302_Notes/M3.pdf", size: "3.0 MB" },
                { name: "Module 4 - Memory Organization", filename: "Resources/DDCO(BCS302)/BCS302_Notes/M4.pdf", size: "2.4 MB" },
                { name: "Module 5 - CPU Design", filename: "Resources/DDCO(BCS302)/BCS302_Notes/M5.pdf", size: "2.9 MB" }
            ],
            pyq: [
                { name: "BCS302 - Previous Year Questions", filename: "Resources/DDCO(BCS302)/BCS302_PYQ/BCS302june-july2024.pdf", size: "3.8 MB", year: "2020-2023" },
                { name: "DDCO Solved Papers - 2024", filename: "Resources/DDCO(BCS302)/BCS302_PYQ/MQP-BCS302.pdf", size: "4.5 MB", year: "2024" }
            ]
        },
        "OS(BCS303)": {
            name: "Operating Systems",
            code: "BCS303",
            notes: [
                { name: "Module 1 - Introduction to OS", filename: "Resources/OS(BCS303)/OS NOTES/OS_module1.pdf", size: "2.3 MB" },
                { name: "Module 2 - Process Management", filename: "Resources/OS(BCS303)/OS NOTES/OS_Module2.pdf", size: "3.2 MB" },
                { name: "Module 3 - Memory Management", filename: "Resources/OS(BCS303)/OS NOTES/OS_module3.pdf", size: "2.8 MB" },
                { name: "Module 4 - File Systems", filename: "Resources/OS(BCS303)/OS NOTES/OS_Module 4.pdf", size: "2.5 MB" },
                { name: "Module 5 - Security", filename: "Resources/OS(BCS303)/OS NOTES/OS_Module 5.pdf", size: "2.6 MB" }
            ],
            pyq: [
                { name: "BCS303 - Previous Year Questions", filename: "Resources/OS(BCS303)/OS PYQ/BCS303 Dec23-Jan24.pdf", size: "4.2 MB", year: "2020-2023" },
                { name: "OS Important Questions", filename: "Resources/OS(BCS303)/OS PYQ/BCS303_MQP.pdf", size: "3.5 MB", year: "2024" }
            ]
        },
        "DSA(BCS304)": {
            name: "Data Structures and Algorithms",
            code: "BCS304",
            notes: [
                { name: "Module 1 - Introduction to DSA", filename: "Resources/DSA(BCS304)/NOTES/BCS304-module-1-pdf.pdf", size: "2.6 MB" },
                { name: "Module 2 - Arrays and Linked Lists", filename: "Resources/DSA(BCS304)/NOTES/BCS304-module-2-pdf.pdf", size: "3.1 MB" },
                { name: "Module 3 - Stacks and Queues", filename: "Resources/DSA(BCS304)/NOTES/BCS304-module-3-pdf.pdf", size: "2.9 MB" },
                { name: "Module 4 - Trees and Graphs", filename: "Resources/DSA(BCS304)/NOTES/BCS304-module-4-pdf.pdf", size: "3.4 MB" },
                { name: "Module 5 - Sorting Algorithms", filename: "Resources/DSA(BCS304)/NOTES/BCS304-module-5-pdf.pdf", size: "2.7 MB" }
            ],
            pyq: [
                { name: "BCS304 - Previous Year Questions", filename: "Resources/DSA(BCS304)/PYQ/BCS304 DEC23:JAN24.pdf", size: "4.7 MB", year: "2020-2023" },
                { name: "DSA Practice Problems", filename: "Resources/DSA(BCS304)/PYQ/BCS304-model-paper-set-1.pdf", size: "5.1 MB", year: "2024" }
            ]
        },
        "JAVA(BCS306A)": {
            name: "Java Programming",
            code: "BCS306A",
            notes: [
                { name: "Module 1 - Java Basics", filename: "Resources/JAVA(BCS306A)/NOTES/BCS306A-module-1-pdf.pdf", size: "2.8 MB" },
                { name: "Module 2 - OOP Concepts", filename: "Resources/JAVA(BCS306A)/NOTES/BCS306A-module-2-pdf.pdf", size: "3.3 MB" },
                { name: "Module 3 - Exception Handling", filename: "Resources/JAVA(BCS306A)/NOTES/BCS306A-module-3-pdf.pdf", size: "2.5 MB" },
                { name: "Module 4 - Collections Framework", filename: "Resources/JAVA(BCS306A)/NOTES/BCS306A-module-4-pdf.pdf", size: "3.0 MB" },
                { name: "Module 5 - Multithreading", filename: "Resources/JAVA(BCS306A)/NOTES/BCS306A-module-5-pdf.pdf", size: "2.9 MB" }
            ],
            pyq: [
                { name: "BCS306A - Previous Year Questions", filename: "Resources/JAVA(BCS306A)/JAVA-PYQ/JAVA MQP.pdf", size: "4.3 MB", year: "2020-2023" },
                { name: "Java Programming Exercises", filename: "Resources/JAVA(BCS306A)/JAVA-PYQ/OOPS-WITH-JAVA-BCS306A-MQP_SOLUTION.pdf", size: "4.8 MB", year: "2024" }
            ]
        }
    };

    // DOM Elements
    const subjectsGrid = document.getElementById('subjectsGrid');
    const resourcesGrid = document.getElementById('resourcesGrid');
    const currentSubjectEl = document.getElementById('currentSubject');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // Current state
    let currentSubject = null;
    let currentResourceType = 'notes';
    let allResources = [];

    // Analytics Tracking Functions
    function trackSubjectView(subjectKey) {
        if (typeof gtag !== 'undefined') {
            const subject = subjectsData[subjectKey];
            gtag('event', 'subject_view', {
                event_category: 'navigation',
                event_label: subject.name,
                subject_name: subject.name,
                subject_code: subject.code
            });
        }
        console.log('📊 Tracked subject view:', subjectKey);
    }

    function trackResourceDownload(resourceName, resourceType, subjectKey) {
        if (typeof gtag !== 'undefined') {
            const subject = subjectsData[subjectKey];
            gtag('event', 'resource_download', {
                event_category: 'download',
                event_label: resourceName,
                resource_name: resourceName,
                resource_type: resourceType,
                subject_name: subject.name,
                subject_code: subject.code,
                download_timestamp: new Date().toISOString()
            });
        }
        console.log('📊 Tracked resource download:', resourceName, resourceType, subjectKey);
    }

    function trackTabSwitch(tabType) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'tab_switch', {
                event_category: 'navigation',
                event_label: tabType,
                tab_name: tabType,
                current_subject: currentSubject
            });
        }
        console.log('📊 Tracked tab switch:', tabType);
    }

    function trackSearch(query, resultsCount) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'search_performed', {
                event_category: 'engagement',
                event_label: query,
                search_query: query,
                results_count: resultsCount,
                search_timestamp: new Date().toISOString()
            });
        }
        console.log('📊 Tracked search:', query, resultsCount);
    }

    function trackPageView(pageName) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                page_name: pageName,
                page_path: window.location.pathname,
                current_section: pageName.toLowerCase()
            });
        }
    }

    // Initialize the application
    function init() {
        console.log('🚀 StudySync initialized with analytics');
        renderSubjects();
        setupScrollTracking();
    }

    // Track scroll depth
    function setupScrollTracking() {
        let scrollTracked = false;
        
        window.addEventListener('scroll', function() {
            const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
            
            if (scrollDepth > 50 && !scrollTracked) {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll_depth', {
                        event_category: 'engagement',
                        event_label: '50_percent_scroll',
                        scroll_percentage: 50
                    });
                }
                scrollTracked = true;
            }
        });
    }

    // Select a subject and display its resources
    function selectSubject(subjectKey) {
        // Track subject selection
        trackSubjectView(subjectKey);
        
        // Update UI
        document.querySelectorAll('.subject-card').forEach(card => {
            card.classList.remove('active');
        });
        
        const selectedCard = document.querySelector(`.subject-card[data-subject="${subjectKey}"]`);
        if (selectedCard) {
            selectedCard.classList.add('active');
        }
        
        // Update current subject
        currentSubject = subjectKey;
        const subject = subjectsData[subjectKey];
        currentSubjectEl.textContent = `Resources for ${subject.name} (${subject.code})`;
        
        // Render resources
        renderResources();
    }

    // Render resources based on current selection
    function renderResources() {
        if (!currentSubject) return;
        
        const subject = subjectsData[currentSubject];
        const resources = currentResourceType === 'notes' ? subject.notes : subject.pyq;
        
        resourcesGrid.innerHTML = '';
        
        if (resources.length === 0) {
            resourcesGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-folder-open"></i>
                    <h3>No ${currentResourceType === 'notes' ? 'notes' : 'PYQs'} available</h3>
                    <p>Check back later for new resources</p>
                </div>
            `;
            return;
        }
        
        resources.forEach(resource => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            
            const resourceType = currentResourceType === 'notes' ? 'Notes' : 'PYQ';
            const icon = currentResourceType === 'notes' ? 'fa-file-alt' : 'fa-question-circle';
            
            resourceCard.innerHTML = `
                <div class="resource-header">
                    <h4>${resourceType}</h4>
                    <span>${resource.size}</span>
                </div>
                <div class="resource-body">
                    <h4>${resource.name}</h4>
                    <p>${subject.name} - ${subject.code}</p>
                    <div class="resource-meta">
                        <span><i class="fas ${icon}"></i> ${resourceType}</span>
                        ${resource.year ? `<span><i class="fas fa-calendar"></i> ${resource.year}</span>` : ''}
                    </div>
                    <button class="download-btn" data-filename="${resource.filename}" data-resource-name="${resource.name}" data-resource-type="${currentResourceType}">
                        Download <i class="fas fa-download"></i>
                    </button>
                </div>
            `;
            
            resourcesGrid.appendChild(resourceCard);
        });
        
        // Store all resources for search functionality
        allResources = resources.map(resource => ({
            ...resource,
            subjectName: subject.name,
            subjectCode: subject.code,
            type: currentResourceType
        }));
    }

    // Render all subjects
    function renderSubjects() {
        subjectsGrid.innerHTML = '';
        Object.keys(subjectsData).forEach(subjectKey => {
            const subject = subjectsData[subjectKey];
            const subjectCard = document.createElement('div');
            subjectCard.className = 'subject-card';
            subjectCard.dataset.subject = subjectKey;
            subjectCard.innerHTML = `
                <div class="subject-header">
                    <h3>${subject.name}</h3>
                    <span>${subject.code}</span>
                </div>
                <div class="subject-body">
                    <p>Comprehensive notes and PYQs for ${subject.name}</p>
                    <div class="subject-stats">
                        <span><i class="fas fa-file"></i> ${subject.notes.length} Notes</span>
                        <span><i class="fas fa-question-circle"></i> ${subject.pyq.length} PYQs</span>
                    </div>
                </div>
            `;
            subjectsGrid.appendChild(subjectCard);
        });
        
        // Select first subject by default
        if (Object.keys(subjectsData).length > 0) {
            const firstSubject = Object.keys(subjectsData)[0];
            selectSubject(firstSubject);
        }
        
        // Attach event listeners after rendering
        setupEventListeners();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Subject selection
        document.querySelectorAll('.subject-card').forEach(card => {
            card.addEventListener('click', function() {
                const subjectKey = this.dataset.subject;
                selectSubject(subjectKey);
            });
        });
        
        // Tab switching
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentResourceType = this.dataset.type;
                
                // Track tab switch
                trackTabSwitch(currentResourceType);
                
                renderResources();
            });
        });
        
        // Download buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('download-btn') || 
                e.target.closest('.download-btn')) {
                const btn = e.target.classList.contains('download-btn') ? 
                    e.target : e.target.closest('.download-btn');
                const filename = btn.dataset.filename;
                const resourceName = btn.dataset.resourceName;
                const resourceType = btn.dataset.resourceType;
                
                // Track download
                trackResourceDownload(resourceName, resourceType, currentSubject);
                
                simulateDownload(filename, resourceName);
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Track navigation
                    trackPageView(targetId.substring(1));
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Track hero section CTA button
        const startLearningBtn = document.getElementById('startLearningBtn');
        if (startLearningBtn) {
            startLearningBtn.addEventListener('click', function() {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'cta_click', {
                        event_category: 'engagement',
                        event_label: 'start_learning_hero',
                        button_location: 'hero_section'
                    });
                }
            });
        }
    }

    // Simulate file download with enhanced tracking
    function simulateDownload(filename, resourceName) {
        showLoading();
        
        // Track download start
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download_start', {
                event_category: 'download',
                event_label: resourceName,
                filename: filename
            });
        }

        // In a real application, this would be an actual file download
        // For simulation, we'll just show a success message after a delay
        setTimeout(() => {
            hideLoading();
            
            // Track download completion
            if (typeof gtag !== 'undefined') {
                gtag('event', 'download_complete', {
                    event_category: 'download',
                    event_label: resourceName,
                    filename: filename,
                    download_time: 1500 // ms
                });
            }

            // Create and show download success notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #10b981;
                color: white;
                padding: 15px 20px;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 10px;
                font-family: Arial, sans-serif;
            `;
            
            notification.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>Download started: ${resourceName}</span>
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transition = 'opacity 0.5s';
                setTimeout(() => {
                    if (notification.parentNode) {
                        document.body.removeChild(notification);
                    }
                }, 500);
            }, 3000);
        }, 1500);
    }

    // Loading spinner functions
    function showLoading() {
        loadingSpinner.style.display = 'flex';
        
        // Track loading event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'loading_start', {
                event_category: 'engagement',
                event_label: 'resource_loading'
            });
        }
    }

    function hideLoading() {
        loadingSpinner.style.display = 'none';
    }

    // Initialize the application
    init();

    // Track time on page
    let pageStartTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
        if (typeof gtag !== 'undefined') {
            gtag('event', 'time_on_page', {
                event_category: 'engagement',
                event_label: 'session_duration',
                time_spent_seconds: timeSpent
            });
        }
    });

    console.log('✅ Analytics integration complete');
});
