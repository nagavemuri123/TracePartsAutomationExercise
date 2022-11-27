Feature: Traceparts image verification

       
        Scenario Outline:Validate product description and image for Photoelectric sensor

            Given I am on the Traceparts homepage
            When user search for keyword <searchkey>
            And user selects product from product listing page
            And user verify product Title
            And user verify product description as <actualtext> from product details page
            Then user select left option from 3D model product image
        Examples:
            | searchkey            | actualtext  |
            | Photoelectric Sensor | LD46-UL-715 |