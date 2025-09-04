import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and Cookie Information for HasLaw',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font_britanica_black text-gray-900 mb-8">Privacy Policy & Cookie Information</h1>
          
          <div className="space-y-8">
            {/* Cookie Information */}
            <section>
              <h2 className="text-2xl font_britanica_bold text-gray-900 mb-4">Cookie Information</h2>
              <div className="prose max-w-none">
                <p className="font_britanica_regular text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your browsing experience, provide personalized content, 
                  and analyze our website traffic. This policy explains what cookies are, how we use them, and your choices regarding cookies.
                </p>
                
                <h3 className="text-xl font_britanica_bold text-gray-900 mb-3">What are Cookies?</h3>
                <p className="font_britanica_regular text-gray-700 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience and allow certain features to work properly.
                </p>
                
                <h3 className="text-xl font_britanica_bold text-gray-900 mb-3">Types of Cookies We Use</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-[#780014] pl-4">
                    <h4 className="font_britanica_bold text-gray-900 mb-2">Necessary Cookies</h4>
                    <p className="font_britanica_regular text-gray-700 text-sm">
                      These cookies are essential for the website to function properly. They enable basic functions like 
                      page navigation, access to secure areas, and remember your cookie preferences.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font_britanica_bold text-gray-900 mb-2">Analytics Cookies</h4>
                    <p className="font_britanica_regular text-gray-700 text-sm">
                      These cookies help us understand how visitors interact with our website by collecting and 
                      reporting information anonymously. We use Google Analytics for this purpose.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font_britanica_bold text-gray-900 mb-2">Functional Cookies</h4>
                    <p className="font_britanica_regular text-gray-700 text-sm">
                      These cookies enable enhanced functionality and personalization, such as remembering your 
                      language preferences and providing personalized content.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font_britanica_bold text-gray-900 mb-2">Marketing Cookies</h4>
                    <p className="font_britanica_regular text-gray-700 text-sm">
                      These cookies are used to track visitors across websites to display relevant and 
                      personalized advertisements and measure the effectiveness of marketing campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font_britanica_bold text-gray-900 mb-4">Your Cookie Choices</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font_britanica_regular text-gray-700 leading-relaxed mb-4">
                  You have the right to control how cookies are used on our website:
                </p>
                
                <ul className="space-y-2 font_britanica_regular text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#780014] mr-2">•</span>
                    You can accept all cookies by clicking &ldquo;Accept All Cookies&rdquo;
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#780014] mr-2">•</span>
                    You can customize your preferences by clicking &ldquo;Customize Settings&rdquo;
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#780014] mr-2">•</span>
                    You can reject non-essential cookies by clicking &ldquo;Reject All&rdquo;
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#780014] mr-2">•</span>
                    You can change your preferences at any time using the cookie settings button
                  </li>
                </ul>
              </div>
            </section>
            
            {/* Browser Settings */}
            <section>
              <h2 className="text-2xl font_britanica_bold text-gray-900 mb-4">Browser Cookie Settings</h2>
              <p className="font_britanica_regular text-gray-700 leading-relaxed mb-4">
                You can also control cookies through your browser settings. Most browsers allow you to:
              </p>
              
              <ul className="space-y-2 font_britanica_regular text-gray-700 ml-6">
                <li>• View and delete cookies</li>
                <li>• Block cookies from specific sites</li>
                <li>• Block third-party cookies</li>
                <li>• Delete all cookies when you close your browser</li>
              </ul>
              
              <p className="font_britanica_regular text-gray-700 leading-relaxed mt-4 text-sm italic">
                Note: Disabling certain cookies may affect the functionality of our website.
              </p>
            </section>
            
            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font_britanica_bold text-gray-900 mb-4">Contact Us</h2>
              <div className="bg-[#780014] text-white p-6 rounded-lg">
                <p className="font_britanica_regular leading-relaxed mb-4">
                  If you have any questions about our cookie policy or privacy practices, please contact us:
                </p>
                
                <div className="space-y-2 font_britanica_regular">
                  <p>Email: privacy@haslaw.com</p>
                  <p>Phone: +62 XXX XXXX XXXX</p>
                  <p>Address: [Your Law Firm Address]</p>
                </div>
              </div>
            </section>
            
            {/* Last Updated */}
            <section className="text-center pt-8 border-t border-gray-200">
              <p className="font_britanica_regular text-gray-500 text-sm">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
