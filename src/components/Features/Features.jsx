import React from 'react'
import "./Features.css"

function Features() {
  return (
    <section className="features">
        <div className="text-margin text-center">
            <h2>Features</h2>
            <p>Our aim to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className="tabs">
            <input type="radio" id="tab1" name="tab" checked/>
            <input type="radio" id="tab2" name="tab"/>
            <input type="radio" id="tab3" name="tab"/>

            <div className="radio-selector">
                <label for="tab1" className="tab-link">Simple Bookmarking</label>
                <label for="tab2" className="tab-link">Speedy Searching</label>
                <label for="tab3" className="tab-link">Easy Sharing</label>
            </div>
            
            <div className="content">
                <div className="tab-content" id="content1">
                    <div className="izq-ft">
                        <img src="imagenes/illustration-features-tab-1.svg" alt="illustration-features-tab-1"/>
                    </div>
                    <div className="der-ft">
                        <h2>Bookmark in one click</h2>
                        <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                        <button className="btn-azul">More info</button>
                    </div>
                </div>
            
                <div className="tab-content" id="content2">
                    <div className="izq-ft">
                        <img src="imagenes/illustration-features-tab-2.svg" alt="illustration-features-tab-1"/>
                    </div>
                    <div className="der-ft">
                        <h2>Intelligent search</h2>
                        <p>Our powerdul search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                        <button className="btn-azul">More info</button>
                    </div>
                </div>
            
                <div className="tab-content" id="content3">
                    <div className="izq-ft">
                        <img src="imagenes/illustration-features-tab-3.svg" alt="illustration-features-tab-1"/>
                    </div>
                    <div className="der-ft">
                        <h2>Share your bookmarks</h2>
                        <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                        <button className="btn-azul">More info</button>
                    </div>
                </div>
            </div>
        </div>

    
    </section>
  )
}

export default Features